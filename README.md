## XPotify

### Versions

```bash
$ node -v #12.16.x
$ npm -v #6.14.x
```

### Run project

```bash
$ yarn
$ yarn build:dev
```

### Available scripts

- `build:dev` - Generate build for dev
- `build:prod` - Generage build for prod (minified)
- `lint:fix` - Fix code based on eslint + prettier
- `lint` - Lint code based on eslint + prettier
- `test` - Run all tests
- `test:watch` Run all tests with --watch
- `test:coverage` Generage covarage folder in root path project

### Todo

- [ ] Add error dispatch in services (album and auth)
- [x] ~~Add token persist in localstorage~~
- [ ] Write `catch` tests in services (album and auth)
- [x] ~~Implement refresh token~~
- [ ] Write Router tests
- [ ] Write SignIn and Dashboard tests

### Notes

1 - A maneira correta de fazer a primeira autenticação para receber o access_token e refresh_token seria fazendo isto por uma aplicação `bff` com variáveis de ambiente, porém, para não adicionar muita complexidade ao teste, preferi fazer isto diretamente no front-end com o arquivo `config.js`
