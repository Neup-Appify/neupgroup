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
        grep -v "account/self" "$ACCOUNT_DIR/index.ts" | grep -v "account.self = self;" > "$temp_file"
        mv "$temp_file" "$ACCOUNT_DIR/index.ts"
    fi
}

load_env_file

project_id=$(get_env_value "NEUPSITE_PROJECT_ID" "NEXT_PUBLIC_NEUPSITE_PROJECT_ID")

if [ -z "$project_id" ]; then
    rm -rf "$LOGICA_DIR"
    exit 0
fi

account_enabled=$(get_env_value "NEUPSITE_ACCOUNT_ENABLED" "NEXT_PUBLIC_NEUPSITE_ACCOUNT_ENABLED")

if [ -z "$account_enabled" ] || [ "$(normalize_bool "$account_enabled")" = "false" ]; then
    rm -rf "$ACCOUNT_DIR"
    write_disabled_account_stub
    exit 0
fi

has_local_lookup=$(get_env_value "NEUPSITE_ACCOUNT_HASLOCAL_LOOKUP" "NEXT_PUBLIC_NEUPSITE_ACCOUNT_HASLOCAL_LOOKUP")

if [ "$(normalize_bool "$has_local_lookup")" = "false" ]; then
    remove_prisma_account_files
fi
EOF

    chmod +x "$ROOT_DIR/logica/setup.sh"
}

REMOTE_CORE_COMMIT=$(git ls-remote "$CORE_REMOTE" refs/heads/main | awk '{print $1}')
LOCAL_CORE_COMMIT=$(git -C "$ROOT_DIR/core" rev-parse HEAD 2>/dev/null || echo "")

if [ "$REMOTE_CORE_COMMIT" != "$LOCAL_CORE_COMMIT" ]; then
    echo "neup.core changed. Updating..."
    rm -rf "$ROOT_DIR/core"
    rm -rf "$ROOT_DIR/neup.core"
    git clone --depth 1 --single-branch -b main "$CORE_REMOTE"
    mv "$ROOT_DIR/neup.core" "$ROOT_DIR/core"
    rm -rf "$ROOT_DIR/core/database"
else
    echo "neup.core already up to date."
fi

REMOTE_LOGICA_COMMIT=$(git ls-remote "$LOGICA_REMOTE" refs/heads/main | awk '{print $1}')
LOCAL_LOGICA_COMMIT=$(git -C "$ROOT_DIR/logica" rev-parse HEAD 2>/dev/null || echo "")

if [ "$REMOTE_LOGICA_COMMIT" != "$LOCAL_LOGICA_COMMIT" ]; then
    echo "neup.logica changed. Updating..."
    rm -rf "$ROOT_DIR/logica"
    rm -rf "$ROOT_DIR/neup.logica"
    git clone --depth 1 --single-branch -b main "$LOGICA_REMOTE"
    mv "$ROOT_DIR/neup.logica" "$ROOT_DIR/logica"
else
    echo "neup.logica already up to date."
fi

rm -rf "$ROOT_DIR/core/database"
write_logica_setup_script

if [ -f "$ROOT_DIR/logica/setup.sh" ]; then
    sh "$ROOT_DIR/logica/setup.sh"
fi
