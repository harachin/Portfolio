FROM node:14.21-slim as node

RUN apt-get update -qq && \
    apt-get install -y \
    vim \
    git \
    curl \
    jq \
    awscli

RUN npm install -g @vue/cli

COPY .bashrc /root/.bashrc

WORKDIR /app
