<p align="center">
	<img src="./github-cover.png" />
</p>

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

### Requirements

- [x] ~~Possibilidade de inserir o nome da música ou album e obter uma lista;~~
- [x] ~~Caso um album seja procurado e retornado, quando selecionado o album, usuário será direcionado a lista de música desse album.~~
- [x] ~~Tocar o preview da música.~~
- [x] ~~Você deve usar React;~~
- [x] ~~Utilizar Redux;~~
- [x] ~~Você deve criar um repositório e compartilhar com a gente;~~
- [x] ~~Você não deve usar nenhum CSS Framework (Bootstrap, PureCss, etc.);~~
- [x] ~~Você não deve usar scaffolds (Create React App, etc.), queremos ver como você vai montar a estrutura do seu projeto;~~
- [x] ~~Quero conseguir rodar seu projeto rodando yarn/npm start;~~
- [x] ~~A aplicação deve solicitar o token que será utilizado para realizar as requisições para a API;~~
- [x] ~~Persistencia do TOKEN, quando expirado solicitar o token novo;~~
- [x] ~~Precisamos ter certeza que nossa aplicação funciona conforme o esperado, alguns testes seriam bem vindos, estamos usando por aqui enzyme e jest, mas sinta-se a vontade para testar com o que sente maior conforto.~~
- [ ] Pense que sua aplicação passará por 3 ambientes, DSV - HML - PRD, monte build e use variaveis de ambiente.
- [ ] Quando o usuário fizer uma requisição seria legal salvar dentro do redux, caso ele digite e busque novamente o album nós pegamos uma cópia de lá para não fazer múltiplas requisições para a API.
- [ ] Quando o usuário entrar na aplicação podemos exibir uma lista com os últimos albums buscados/clicados para melhorar a experiência.
- [x] Hoje grande parte dos acessos a sites são feitos por celular, um layout responsivo faz todo sentido para nossa aplicação!
- [x] Nosso time de UX é bem exigente, pensam bastante na experiência do usuário, algumas animações e efeitos seriam interessantes também.

### Notes

1 - A maneira correta de fazer a primeira autenticação para receber o access_token e refresh_token seria fazendo isto por uma aplicação `bff` com variáveis de ambiente, porém, para não adicionar muita complexidade ao teste, preferi fazer isto diretamente no front-end com o arquivo `config.js`.

2 - Optei por uma abordagem mais dinâmica e em vez de um trigger para busca compo por exemplo apertar a tecla enter, preferi fazer os requests no onChange do input, embora isto cause uma sobrecarga na api, tendo em vista que é feito um request para cada tecla digitada, porém, em um ambiente real, talvez esta não fosse a melhor abordagem.

3 - Prezei pela variedade dos testes (component, reducer, api, utils, etc) e não pela quantidade de testes, tendo em mente que o intuito seria a avaliação de conhecimento, e não obter 100% de cobertura do código. Foram escritos 40 testes em 9 suites. Devo admitir que não tenho tanto conhecimento sobre testes, mas foi uma experiência bacana ter podido estudar um pouco mais sobre o assunto durante esta semana.

4 - Optei por utilizar o styled-component de uma forma mais simples ao invés algum padrão de css como BEM, por exemplo.

> Se alguém chegou até este último item, parabéns, escrevi demais hahaha. Gostaria de agradecer a oportunidade e pedir um favor: Em caso de sucesso ou não, gostaria que quem fizesse o review do código, pudesse me dar um feedback acerca dos acertos e o que poderia melhorar, pode ser através das issues do próprio github, o que acha? 😬
