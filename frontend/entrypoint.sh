#!/bin/bash
set -e

if [ -f /usr/local/bin/node ] && [ -f /frontend/package.json ]; then
  export REACT_APP_PACKAGE_NAME=$(node -e "console.log(require('/frontend/package.json').name);")
  export REACT_APP_PACKAGE_VERSION=$(node -e "console.log(require('/frontend/package.json').version);")
fi

exec "$@"