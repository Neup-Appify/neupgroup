#!/bin/sh

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

CORE_REMOTE="https://github.com/neupgroup/neup.core.git"
LOGICA_REMOTE="https://github.com/neupgroup/neup.logica.git"

write_logica_setup_script() {
    if [ ! -d "$ROOT_DIR/logica" ]; then
        return
    fi

    cat > "$ROOT_DIR/logica/setup.sh" <<'EOF'
#!/bin/sh

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
LOGICA_DIR="$ROOT_DIR/logica"
ACCOUNT_DIR="$LOGICA_DIR/account"
ENV_FILE="$ROOT_DIR/.env"

load_env_file() {
    if [ ! -f "$ENV_FILE" ]; then
        return
    fi

    set -a
    # shellcheck disable=SC1090
    . "$ENV_FILE"
    set +a
}

get_env_value() {
    primary_name=$1
    secondary_name=$2

    eval "primary_value=\${$primary_name-}"
    eval "secondary_value=\${$secondary_name-}"

    if [ -n "$primary_value" ]; then
        printf '%s\n' "$primary_value"
        return
    fi

    printf '%s\n' "$secondary_value"
}

normalize_bool() {
    value=$1
    printf '%s' "$value" | tr '[:upper:]' '[:lower:]'
}

write_disabled_account_stub() {
    mkdir -p "$ACCOUNT_DIR"

    cat > "$ACCOUNT_DIR/index.ts" <<'EOF_ACCOUNT'
export const account = {} as const;

export default account;
EOF_ACCOUNT
}

remove_prisma_account_files() {
    if [ ! -d "$ACCOUNT_DIR" ]; then
        return
    fi

    find "$ACCOUNT_DIR" -type f ! -name "index.ts" | while IFS= read -r file_path; do
        if grep -qiE 'prisma|@/core/database/prisma|core/database/prisma' "$file_path"; then
            rm -f "$file_path"
        fi
    done

    if [ -f "$ACCOUNT_DIR/index.ts" ] && [ ! -f "$ACCOUNT_DIR/self.ts" ]; then
        temp_file=$(mktemp)
        grep -v "account/self" "$ACCOUNT_DIR/index.ts" |
            grep -v "account.self = self;" > "$temp_file"
        mv "$temp_file" "$ACCOUNT_DIR/index.ts"
    fi
}

load_env_file

project_id=$(get_env_value \
    "NEUPSITE_PROJECT_ID" \
    "NEXT_PUBLIC_NEUPSITE_PROJECT_ID"
)

if [ -z "$project_id" ]; then
    rm -rf "$LOGICA_DIR"
    exit 0
fi

account_enabled=$(get_env_value \
    "NEUPSITE_ACCOUNT_ENABLED" \
    "NEXT_PUBLIC_NEUPSITE_ACCOUNT_ENABLED"
)

if [ -z "$account_enabled" ] || \
   [ "$(normalize_bool "$account_enabled")" = "false" ]; then

    rm -rf "$ACCOUNT_DIR"
    write_disabled_account_stub
    exit 0
fi

has_local_lookup=$(get_env_value \
    "NEUPSITE_ACCOUNT_HASLOCAL_LOOKUP" \
    "NEXT_PUBLIC_NEUPSITE_ACCOUNT_HASLOCAL_LOOKUP"
)

if [ "$(normalize_bool "$has_local_lookup")" = "false" ]; then
    remove_prisma_account_files
fi
EOF

    chmod +x "$ROOT_DIR/logica/setup.sh"
}


# --------------------------------------------------
# Check whether local repository must be re-downloaded
# --------------------------------------------------

repo_needs_update() {
    REPO_DIR=$1
    REMOTE_URL=$2
    REPO_NAME=$3

    # Folder does not exist
    if [ ! -d "$REPO_DIR" ]; then
        echo "$REPO_NAME does not exist."
        return 0
    fi

    # Folder exists but is not a Git repository
    if ! git -C "$REPO_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        echo "$REPO_NAME is not a valid Git repository."
        return 0
    fi

    REMOTE_COMMIT=$(git ls-remote "$REMOTE_URL" refs/heads/main | awk '{print $1}')

    if [ -z "$REMOTE_COMMIT" ]; then
        echo "Unable to determine remote commit for $REPO_NAME."
        return 2
    fi

    LOCAL_COMMIT=$(git -C "$REPO_DIR" rev-parse HEAD 2>/dev/null || echo "")

    # --------------------------------------------------
    # 1. Local commit is different from GitHub main
    #
    # This catches BOTH:
    # - GitHub main changed
    # - local commits exist that are not GitHub main
    # --------------------------------------------------

    if [ "$REMOTE_COMMIT" != "$LOCAL_COMMIT" ]; then
        echo "$REPO_NAME commit differs from GitHub main."
        echo "  Local : $LOCAL_COMMIT"
        echo "  Remote: $REMOTE_COMMIT"
        return 0
    fi

    # --------------------------------------------------
    # 2. Check tracked + untracked file changes
    #
    # git status --porcelain catches:
    # - modified files
    # - deleted files
    # - added files
    # - staged files
    # - untracked files
    # --------------------------------------------------

    LOCAL_CHANGES=$(git -C "$REPO_DIR" status --porcelain 2>/dev/null)

    if [ -n "$LOCAL_CHANGES" ]; then
        echo "$REPO_NAME has local file changes:"
        printf '%s\n' "$LOCAL_CHANGES"
        return 0
    fi

    # Everything matches
    return 1
}


# --------------------------------------------------
# neup.core
# --------------------------------------------------

repo_needs_update \
    "$ROOT_DIR/core" \
    "$CORE_REMOTE" \
    "neup.core"

CORE_STATUS=$?

if [ "$CORE_STATUS" -eq 0 ]; then

    echo "neup.core changed locally or remotely. Updating..."

    rm -rf "$ROOT_DIR/core"
    rm -rf "$ROOT_DIR/neup.core"

    git clone \
        --depth 1 \
        --single-branch \
        -b main \
        "$CORE_REMOTE" \
        "$ROOT_DIR/neup.core"

    mv "$ROOT_DIR/neup.core" "$ROOT_DIR/core"

    rm -rf "$ROOT_DIR/core/database"

elif [ "$CORE_STATUS" -eq 1 ]; then

    echo "neup.core already up to date and clean."

else

    echo "Could not check neup.core remote. Keeping existing files."
fi


# --------------------------------------------------
# neup.logica
# --------------------------------------------------

repo_needs_update \
    "$ROOT_DIR/logica" \
    "$LOGICA_REMOTE" \
    "neup.logica"

LOGICA_STATUS=$?

if [ "$LOGICA_STATUS" -eq 0 ]; then

    echo "neup.logica changed locally or remotely. Updating..."

    rm -rf "$ROOT_DIR/logica"
    rm -rf "$ROOT_DIR/neup.logica"

    git clone \
        --depth 1 \
        --single-branch \
        -b main \
        "$LOGICA_REMOTE" \
        "$ROOT_DIR/neup.logica"

    mv "$ROOT_DIR/neup.logica" "$ROOT_DIR/logica"

elif [ "$LOGICA_STATUS" -eq 1 ]; then

    echo "neup.logica already up to date and clean."

else

    echo "Could not check neup.logica remote. Keeping existing files."
fi


# --------------------------------------------------
# Final cleanup / setup
# --------------------------------------------------

rm -rf "$ROOT_DIR/core/database"

write_logica_setup_script

if [ -f "$ROOT_DIR/logica/setup.sh" ]; then
    sh "$ROOT_DIR/logica/setup.sh"
fi