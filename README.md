<h4 align="center">
  🔒 API de Autenticação JWT com TypeScript e TypeORM
</h4>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🎮 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.Js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)


## 📑 Projeto 

Este projeto é uma API desenvolvida em Node.Js utilizando TypeScript, JWT e TypeORM. A função desse pequeno back-end é cadastrar um usuário onde o mesmo fornece e-mail e senha que estas Informações são enviadas para um banco de dados relacional (PostgreSQL). A senha é salva na base de dados criptografada pelo JWT e a autenticação do usuário é feita pelo token gerado após do cadastro 

## 📼 Desenvolvimento 

O projeto foi divido em 8 partes: 

- Configuração do TypeScript e Nodemon
- Configuração do Express
- Configuração TypeORM
- Criação da migration de usuário
- Criação da rota de cadastro
- Criação da rota de autenticação
- Criação do middlewares de autenticação
