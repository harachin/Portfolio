export LANG=C.UTF-8 
export LANGUAGE=en_US:

source /usr/share/bash-completion/completions/git
source /etc/bash_completion.d/git-prompt

export PS1="[\\u \\W\$(__git_ps1 \" (%s)\")]\\\$ "
export PROMPT_COMMAND='__git_ps1 "\u:\w" "\\\$ "'
export GIT_PS1_SHOWDIRTYSTATE=true
export GIT_PS1_SHOWCOLORHINTS=true
