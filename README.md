# Projeto Blogs Api - back end
Blogs Api é um projeto desenvolvido em NodeJS, Express e Sequelize com o objetivo de criar uma API para um blog, onde é possível criar, editar, deletar e listar posts, além de criar, editar, deletar e listar usuários. O projeto foi desenvolvido com o intuito de aprender mais sobre NodeJS e suas funcionalidades, além de aprender mais sobre o desenvolvimento de APIs.

## Documentação com as rotas:
- [Documentação](https://documenter.getpostman.com/view/23798069/2s83zjt3te)

## Como rodar a aplicação?

- **Passo 1:** faça o clone do repositório

  `git clone git@github.com:JhonyAltoe/blogs-api-back-end.git`

- **Passo 2:** entre na pasta raiz do projeto

  `cd blogs-api-back-end`
  
- **Passo 3:** uma vez no diretório raiz instale as dependências
 
  `npm install`

- **Passo 4:** rode o docker compose para rodar os serviços Node e MySql

  `docker-compose up -d --build`

***obs.:*** caso ocorra algum problema ao rodar o `docker-compose` um possível solução é remover todos os containers e rodar o comando acima de novo

- **Passo 5:** crie o banco de dados e as tabelas com o comando abaixo

  `npm run prestart`

- **Passo 6:** insira informações nas tabelas com o comando abaixo

  `npm run seed`

- **Passo 7:** entre no container Node criado anteriormente para rodar a aplicação

  `docker exec -it blogs-api bash`

- **Passo 8:** agora dentro do container rode a aplicação com o seguinte comando

  `npm run debug` para rodar com o nodemon ou `npm start`
  
- **Passo 9:** renomeie arquivo `.env.example` para `.env` onde contem as variáveis de ambiente.

### Atenção: 
Várias das rotas necessitam seja passo no header da requisição o **token** gerado ao fazer um login. Para isso utilize a rota `/user` para criar um usuário e em seguida faça o login com na rota `/login` para obter na resposta o token que será necessário para as outras requisições.
