#/bin/sh

git config --global user.email ${GIT_EMAIL}
git config --global user.name  ${GIT_NAME}
git config --global core.editor ${GIT_EDITOR:-vim}
git config --global push.default current
git config --global pull.ff only
git config --global pull.rebase false
git config --global init.defaultBranch main
git config --global core.autocrlf false
git config --global core.ignorecase false
git config --global color.ui true

npm install

exit 0
