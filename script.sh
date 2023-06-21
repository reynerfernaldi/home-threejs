#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

source ~/.bashrc

check=nvm -v
echo "install nvm successfully", $check
check_node=node -v
echo "node before update ...", $check_node
echo "installing node with version 14.16.1"
nvm install 16
echo "node after update ...", $check_node
yarn && yarn dev