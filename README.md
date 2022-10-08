# Projeto Blogs Api - back end

## Como rodar a aplicação?

- **Passo 1:** faça o clone do repositório

  `git clone git@github.com:JhonyAltoe/blogs-api-back-end.git`

- **Passo 2:** entre na pasta raiz do projeto

  `cd blogs-api-back-end`
  
- **Passo 3:** uma vez no diretório raiz instale as dependências
 
  `npm install`

- **Passo 4:** rode o docker compose para rodar os serviços Node e MySql

  `docker-compose up -d --build`

**obs.:** caso ocorra algum problema ao rodar o `docker-compose` um possível solução é remover todos os containers e rodar o comando acima de novo

- **Passo 5:** crie o banco de dados e as tabelas com o comando abaixo

  `npm run prestart`

- **Passo 6:** insira informações nas tabelas com o comando abaixo

  `npm run seed`

- **Passo 7:** entre no container Node criado anteriormente para rodar a aplicação

  `docker exec -it blogs-api bash`

- **Passo 8:** agora dentro do container rode a aplicação com o seguinte comando

  `npm run debug` para rodar com o nodemon ou `npm start`
