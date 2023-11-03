<h1 align="center">
 Gestão Veículos - Desafio Rentcars
</h1>

<h3 align="center">
  Api em Node.js com Sequelize, front-end em Angular e banco de dados MySql.
</h3>

<p align="center">Este projeto tem como objetivo realizar a gestão de veículos (CRUD).
</p>

## 🚀 Tecnologias

- Node.js
- ⚡ Express
- 💾 Sequelize
- Angular CLI: 16.2.8

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/) >= v18.16.0
- [Docker](https://www.docker.com/get-started/)

## Instruções

## Siga na mesma ordem os passos a seguir :

##1 Banco de dados MySQL

Espera-se um banco MySql 8.0 rodando no localhost na porta 3307

##2 🔥 Instalação e execução da Api

1. Faça um clone desse repositório
2. Entre na pasta `cd \desafio-rentcars\api`
3. Rode `npm install` para instalar as dependências
4. altere as credencias dentro de  `/src/config/database.js` para o seu banco mysql
5. Rode `npx sequelize-cli db:create ` para criar o banco de dados
6. Rode `npx sequelize-cli db:migrate ` para executar as migrations
7. Rode `npx sequelize-cli db:seed:all` para popular os dados das Locadoras
8. Rode `npm start` para iniciar o servidor

##3 🔥 Instalação e execução Front-end

9. Entre na pasta `cd \front-end-gestao-veiculos\gestao-veiculos>`
10. Rode `npm install` para instalar as dependências
11. Rode `npm start` aguarde iniciar e abra o endereço http://localhost:4200/

---

Feito com 💖 by Karina Esparza 👋
