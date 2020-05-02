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

### Todo:

- [ ] Add error dispatch in services (album and auth)
- [ ] Add token persist in localstorage
- [ ] Write `catch` tests in services (album and auth)
- [ ] Implement refresh token
- [ ] Write Router tests
- [ ] Write SignIn and Dashboard tests
