# CORE
CORE_REMOTE="https://github.com/neupgroup/neup.core.git"

REMOTE_CORE_COMMIT=$(git ls-remote "$CORE_REMOTE" refs/heads/main | awk '{print $1}')
LOCAL_CORE_COMMIT=$(git -C core rev-parse HEAD 2>/dev/null || echo "")

if [ "$REMOTE_CORE_COMMIT" != "$LOCAL_CORE_COMMIT" ]; then
    echo "neup.core changed. Updating..."

    rm -rf core
    rm -rf neup.core

    git clone --depth 1 --single-branch -b main "$CORE_REMOTE"

    mv neup.core core

    rm -rf core/database
else
    echo "neup.core already up to date."
fi


# LOGICA
LOGICA_REMOTE="https://github.com/neupgroup/neup.logica.git"

REMOTE_LOGICA_COMMIT=$(git ls-remote "$LOGICA_REMOTE" refs/heads/main | awk '{print $1}')
LOCAL_LOGICA_COMMIT=$(git -C logica rev-parse HEAD 2>/dev/null || echo "")

if [ "$REMOTE_LOGICA_COMMIT" != "$LOCAL_LOGICA_COMMIT" ]; then
    echo "neup.logica changed. Updating..."

    rm -rf logica
    rm -rf neup.logica

    git clone --depth 1 --single-branch -b main "$LOGICA_REMOTE"

    mv neup.logica logica
else
    echo "neup.logica already up to date."
fi