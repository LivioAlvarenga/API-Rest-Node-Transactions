<h1 align="center"> 
	API REST em Node.js 
</h1>
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-vitrine-dev">Vitrine Dev</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-instalação">Instalações</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

&nbsp;
<a id="-sobre-o-projeto"></a>

![Insomnia](https://github.com/LivioAlvarenga/API-Rest-Node-Transitions/blob/master/files/GET.gif?raw=true#vitrinedev)

## 💻 Sobre o projeto

🚀 Em construção...

&nbsp;

<p align="center">
  <a href="#license"><img src="https://img.shields.io/github/license/LivioAlvarenga/API-Rest-Node-Transitions?color=ff0000"></a>
  <a href="https://github.com/LivioAlvarenga/API-Rest-Node-Transitions/issues"><img src="https://img.shields.io/github/issues/LivioAlvarenga/API-Rest-Node-Transitions" alt="issue site API-Rest-Node-Transitions" /></a>
  <a href="https://github.com/LivioAlvarenga/API-Rest-Node-Transitions"><img src="https://img.shields.io/github/languages/count/LivioAlvarenga/API-Rest-Node-Transitions" alt="total amount of programming languages used in the project" /></a>
  <a href="https://github.com/LivioAlvarenga/API-Rest-Node-Transitions"><img src="https://img.shields.io/github/languages/top/LivioAlvarenga/API-Rest-Node-Transitions" alt="most used language in the projects" /></a>
  <a href="https://github.com/LivioAlvarenga/API-Rest-Node-Transitions"><img src="https://img.shields.io/github/repo-size/LivioAlvarenga/API-Rest-Node-Transitions" alt="repository size" /></a>
<p>

&nbsp;

---

&nbsp;
<a id="-vitrine-dev"></a>

## 📺 Vitrine Dev

| :placard: Vitrine.Dev |                              |
| --------------------- | ---------------------------- |
| :sparkles: Nome       | **API RESTful com Node.js**  |
| :label: Tecnologias   | NodeJs, JavaScript, Insomnia |

---

&nbsp;
<a id="-tecnologias"></a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto

&nbsp;

<p align="center">
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://www.fastify.io/"><img alt="Fastify badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=000000&logo=Fastify&label=Framework&message=Fastify&color=000000"></a>
  <a href= "https://knexjs.org/"><img alt="KnexJs badge" src="https://raw.githubusercontent.com/LivioAlvarenga/API-Rest-Node-Transitions/e34350095a3219ca2d430ae560f186f95d60a332/files/knex.svg"></a>
  <a href= "https://www.sqlite.org/index.html"><img alt="SQLite badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=003b57&logo=SQLite&label=Database DEV&message=SQLite&color=003b57"></a>
  <a href= "https://insomnia.rest/"><img alt="Insomnia badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=4000BF&logo=Insomnia&label=HTTP client&message=Insomnia&color=4000BF"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
</p>

---

&nbsp;
<a id="-instalação"></a>

## ⚙️ Instalações

### Criando projeto NodeJs

```bash
# Criando projeto NodeJs com o npm init -y (-y para não precisar responder as perguntas)
npm init -y

# Adicionando o type module para o NodeJs reconhecer o import/export em vez do require do CommonJS
# Adicionar no arquivo package.json no campo "type"
"type": "module",
```

```json
// Adicionar no arquivo package.json no campo "scripts"
"scripts": {
  "dev": "tsx watch src/server.ts", // start server
},
```

### Instalando dependências

```bash
npm install -D typescript # Instalando o TypeScript em modo de desenvolvimento
npx tsc --init # Inicializando o TypeScript
npm install -D @types/node # Instalando o @types/node para o TypeScript reconhecer os métodos do NodeJs
npm install -D tsx # Instalando o tsx para compilar o TypeScript em tempo real *usar somente em ambiente de desenvolvimento!
```

```json
"target": "es2020", // Alterando o target do TypeScript para o ES2020 em tsconfig.json
```

```bash
npm install fastify # Instalando o Fastify
npm install knex sqlite3 # Instalando o Knex e o SQLite3 para o banco de dados
```

### Configurando ESlint

```bash
# Instalando Eslint
npm init @eslint/config

# √ How would you like to use ESLint? · style
# √ What type of modules does your project use? · esm
# √ Which framework does your project use? · none
# √ Does your project use TypeScript? · Yes
# √ Where does your code run? · browser
# √ How would you like to define a style for your project? · prompt
# √ What format do you want your config file to be in? · JSON
# √ What style of indentation do you use? · 2
# √ What quotes do you use for strings? · double
# √ What line endings do you use? · windows
# √ Do you require semicolons? · Yes

# Adicionar em ident a opção { "SwitchCase": 1 }, para corrigir erro de edentação em switchCase
"indent": ["error", 2, { "SwitchCase": 1 }],

# Adicionar ignorePatterns "*.config.cjs" para ignorar os arquivos de configuração. Ou adicione no top dos arquivos /* eslint-env node */, pois Node é o ambiente real durante a compilação.
"ignorePatterns": ["*.config.cjs"]
```

### Configurando knex.js

```ts
// Criar arquivo knexfile.js na raiz do projeto e adicionar o código abaixo
import { configKnex } from "./src/database";

export default configKnex;
// Obs: em database.ts adicionar export default configKnex;

// Adicionar no arquivo database.ts onde deve ser salvo as migrations
migrations: {
  extension: "ts",
  directory: "./db/migrations",
}

// Adicionar em package.json no campo "scripts"
"knex": "node --no-warnings --loader tsx ./node_modules/knex/bin/cli.js"
// Obs: --no-warnings --loader tsx para o knex.js reconhecer o TypeScript

npm run knex -- migrate:make create-transitions
// Comando usado para criar migrates (npm run knex -- migrate:make + nome da migrate)

npm run knex -- migrate:latest
// Comando usado para rodar as migrates (npm run knex -- migrate:latest)

npm run knex -- migrate:rollback
// Comando usado para desfazer as migrates (npm run knex -- migrate:rollback)

```

&nbsp;

---

&nbsp;
<a id="-funcionalidades"></a>

## ⚙️ Funcionalidades

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa
- Importação de tasks em massa por um arquivo CSV

&nbsp;

### 🧭 Rodando a aplicação web (Modo desenvolvimento)

```bash
# Clone este repositório
git clone https://github.com/livioalvarenga/API-Rest-Node-Transitions.git
# Acesse a pasta do projeto no seu terminal/cmd
cd API-Rest-Node-Transitions
# Instale as dependências
npm install
# Execute a aplicação em modo de desenvolvimento
npm run dev
# A aplicação será aberta na porta:3333 - acesse http://localhost:3333
npm run csv
# Importar arquivo CSV com tasks (open db.json to see the import result)
```

### 🧭 Rodando a aplicação server (Modo desenvolvimento)

```bash
npm run dev
# A aplicação será aberta na porta:3333 - acesse http://0.0.0.0:3333/
```

### Importando arquivo CSV com tarefas

```bash
npm run dev # start server
npm run csv # import csv file with tasks
```

### Testando requests com Insomnia

```bash
npm run dev # start server
```

> Importar o arquivo `Insomnia.json` no Insomnia para testar as requests

![Insomnia](https://github.com/LivioAlvarenga/API-Rest-Node-Transitions/blob/master/files/insomnia.png?raw=true)

&nbsp;

---

&nbsp;
<a id="-autor"></a>

## 🦸 Autor

Olá, eu sou Livio Alvarenga, Engenheiro de Produção | Dev Back-end e Front-end. Sou aficcionado por tecnologia, programação, processos e planejamento. Uni todas essas paixões em uma só profissão. Dúvidas, sugestões e críticas são super bem vindas. Seguem meus contatos.

- [www.livioalvarenga.com](https://livioalvarenga.com)
- contato@livioalvarenga.com

&nbsp;

<p align="center">
  <a href= "https://www.livioalvarenga.com/"><img alt="portifólio livio alvarenga" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/3109a24e71f07dbad193ae0ddbc43b69b39c7adf/files/badgePortifolioLivio.svg"></a>
  <a href= "https://www.linkedin.com/in/livio-alvarenga-planejamento-mrp-engenheiro-produ%C3%A7%C3%A3o-materiais-vba-powerbi/"><img alt="perfil linkedin livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=0A66C2&logo=LinkedIn&label=LinkedIn&message=Livio Alvarenga&color=0A66C2"></a>
  <a href= "https://twitter.com/AlvarengaLivio"><img alt="perfil twitter livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1DA1F2&logo=Twitter&label=Twitter&message=@AlvarengaLivio&color=1DA1F2"></a>
  <a href= "https://www.instagram.com/livio_alvarenga/"><img alt="perfil instagram livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E4405F&logo=Instagram&label=Instagram&message=@livio_alvarenga&color=E4405F"></a>
  <a href= "https://www.facebook.com/profile.php?id=100083957091312"><img alt="perfil facebook livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1877F2&logo=Facebook&label=Facebook&message=Livio Alvarenga&color=1877F2"></a>
  <a href= "https://www.youtube.com/channel/UCrZgsh8IWyyNrRZ7cjrPbcg"><img alt="perfil youtube livio alvarenga" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=FF0000&logo=YouTube&label=Youtube&message=Livio Alvarenga&color=FF0000"></a>
</p>
<p align="center">
 <a href= "https://cursos.alura.com.br/vitrinedev/livioalvarenga"><img alt="perfil vitrinedev livio alvarenga" align="center" height="30" src="https://raw.githubusercontent.com/LivioAlvarenga/LivioAlvarenga/e0f5b5a82976af114d957c20f0c78b4d304a68a0/files/vitrinedev.svg"></a>
</p>

---

&nbsp;
<a id="-licença"></a>

## 📝 Licença

Este projeto é [MIT licensed](./LICENSE).

##### _#CompartilheConhecimento_
