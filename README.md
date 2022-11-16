# 🛠️ Very Useful Tools to Remember

## 💻 Sobre o projeto
 Este Projeto é um desafio de back-end proposto pela Bossabox para o processo seletivo de Desenvolvedor Back-end. Foi utilizado o swagger para fazer a documentação e  o JWT para a autenticação.
 
 Mais informações sobre o desafio aqui: https://www.notion.so/Back-end-0b2c45f1a00e4a849eefe3b1d57f23c6.

## 🧰 Tecnologias utilizadas

* Javascript
* Express.js
* Node.js
* DotEnv
* MongoDB
* Mongoose ODM
* Swagger API
* JWT (JSON Web Token) Authentication


## 🛣 Rotas

### GET /doc
  Para acessar  a documentação SWAGGER e fazer os testes de requisições
### GET / 
  Página principal
### GET /tools
  Listagem de todos as ferramentas cadastradas no banco de dados.
### GET /tools/:id
  Listagem de todos  as ferramentas por ID.
### GET /auth/list 
  Listagem de todos os administradores
### POST /tools
Insere nova ferramenta
### POST /auth/login
Realiza o login 
### POST /auth/register 
Insere novo registro de admin
### DELETE /:id
Deleta Ferramenta

## 👩‍💻Instalação
 ### ```npm  install ```
 ### Rode o projeto com o script : ``` npm start```
 ### Criar um arquivo na pasta raiz do projeto chamado ".env" e inserir as seguintes propriedades no arquivo:
 ```
 MONGO_URI = {sua uri}
 ```
 ```
 JWT_SECRET_KEY = {sua secret key}
 ```
 
 ## 🐋Docker
Caso você queira rodar a aplicação diretamente do docker insira o código abaixo:
```
docker run -p 3000:3000 -e "MONGO_URI={inserir aqui uri}" -e JWT_SECRET_KEY={inserir aqui chave} gahbr/vuttr
```
## 🦸 Autor

<a href="https://github.com/Gahbr">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80289718?v=4" width="100px;" alt="Gabriel Ribeiro"/>
 <br />
 <sub><b>Gabriel Ribeiro</b></sub></a> <a href="https://github.com/Gahbr" title="github"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriellribeiro1/)](https://www.linkedin.com/in/gabriellribeiro1/)
[![Yahoo!](https://img.shields.io/badge/Yahoo!-6001D2?style=flat-square&logo=Yahoo!&logoColor=white)](mailto:gabriell.ribeiro@yahoo.com)
[![GitHub](https://img.shields.io/badge/Gahbr-%23121011.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/Gahbr)
