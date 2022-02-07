# harachin's portfolio

This is my engineering profile.

## Dependencies

- Typescript
- Scss
- Vue3

## Project setup

### install development tools

- [Visual studio code](https://azure.microsoft.com/en-us/products/visual-studio-code/)

- Install the recommended extensions(See: .vscode\extensions.json)

### Setup container and workspace

1. placing & edit `.env` file for your environment.

    ```bash
    cp .env{.example,.development}
    ```

2.  build docker container

    ```bash
    docker-compose build -f .devcontainer\docker-compose.yml
    ```

3. Execute `Reopen in container` on the command palette

4. install node package

    ```bash
    npm install
    ```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## License
This software is released under the MIT License, see LICENSE.

## References
- [Vue.js](https://v3.ja.vuejs.org/)
