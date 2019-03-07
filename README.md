# Create web app

Inicie seus projetos sem configurar o ambiente.

- [Iniciando o projeto](#iniciando-projeto)
- [Compilando o projeto para produção](#compilando-projeto)
- [Entendendo a estrutura de pastas](#entendendo-estrutura)

# iniciando-projeto
## Iniciando o projeto

Faça um clone do repositório:
```sh
git clone https://github.com/Maycon-Santos/web-project-template.git
```

Instale as dependências:
**`npm install`** ou **`yarn`**

(つ ͡° ͜ʖ ͡°)つ Agora você tem um ambiente para desenvolver o seu projeto!!

## Subindo o servidor de desenvolvimento

Agora precisamos subir o nosso servidor de desenvolvimento. É onde nós vamos conseguir ver e debugar o projeto em execução antes de gerarmos os arquivos para produção.
<br /> Para isso vamos usar o comando: **`npm start`** ou **`yarn start`**
<br /> <br /> E pronto! Você verá que o código foi compilado e que abriu uma nova guia no seu navegador padrão.

#### Dashboard

Rode o comando **`npm start:dashboard`** ou **`yarn start:dashboard`** e veja algo parecido com isso:
<br /><br />
![Print do Dashboard](https://i.imgur.com/smj8htxl.png)

# compilando-projeto
## Compilando o projeto para produção

Vai chegar a hora que você vai precisar fazer o deploy da sua web app, e claro que você vai querer que o seu projeto seja otimizado pra isso.
<br /> Basta rodar o comando **`npm run build`** ou **`yarn build`**.
<br /> Na raiz do projeto será gerada uma pasta chamada build. É lá onde está todo o projeto otimizado para deploy.

# entendendo-estrutura
## Entendendo a estrutura de pastas

```
web-app
├── node_modules
├── package.json
├── .gitignore
├── ...
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── app
    │   ├── app.js
    │   ├── app.style.scss
    │   └── app.template.html
    ├── assets
    │   └── ...
    ├── commons
    │   └── ...
    ├── components
    │   ├── component-example
    │   │   ├── [component-name].component.js
    │   │   ├── [component-name].style.scss
    │   │   ├── [component-name].template.html
    │   └── ...
    ├── helpers
    │   └── ...
    ├── screens
    │   ├── screen-example
    │   │   ├── [screen-name].screen.js
    │   │   ├── [screen-name].style.scss
    │   │   ├── [screen-name].template.html
    │   └── ...
    └── index.js
```

Existem alguns arquivos e diretórios, mas os que vão nos interessar são: public e src.

### public
Onde vão ficar os arquivos que não precisam necessariamente serem compilados. Ex: imagens, arquivos de fonte (.ttf, .woff) e etc...
<br /> Por padrão existem os arquivos `index.html` e `favicon.ico`, o `index.html` é essencial para a sua web app e o favicon pode ser trocado, basta substituir por um arquivo de mesmo nome.

### src
Onde vão ficar os arquivos que serão compilados para o bundle. Ex: Arquivos js, sass, imagens e etc...
