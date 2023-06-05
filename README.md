# Blogs API Back-end

## Entre em contato comigo

Sinta-se à vontade para entrar em contato, seja qual for o motivo, principalmente se for para me dar um trabalho 😄

**Linkedin:** [https://www.linkedin.com/in/jhony-altoe/](https://www.linkedin.com/in/jhony-altoe/)<br />
**Email:** jhonymikealtoe@hotmail.com<br />
**Whatsapp:** +55 27 99506-5211

## Seja bem-vindo ao meu projeto back-end!

Neste projeto back-end, você encontrará uma API com banco de dados para manipular um blog. É possível adicionar usuários, adicionar posts, editar, listar, deletar, pesquisar e tudo isso de forma autenticada. Isso está incrível!

## Sumário
- [Blogs API Back-end](#blogs-api-back-end)
  - [Entre em contato comigo](#entre-em-contato-comigo)
  - [Seja bem-vindo ao meu projeto back-end!](#seja-bem-vindo-ao-meu-projeto-back-end)
  - [Sumário](#sumário)
  - [Tecnologias que eu usei](#tecnologias-que-eu-usei)
  - [Não se preocupe com o ambiente de desenvolvimento](#não-se-preocupe-com-o-ambiente-de-desenvolvimento)
  - [Rodando a aplicação com o Docker](#rodando-a-aplicação-com-o-docker)
  - [Documentação](#documentação)

## Tecnologias que eu usei
- **Node.js**
- **JavaScript**
- **Express**
- **MySQL**
- **Docker**
- **Jsonwebtoken (JWT)**
- **Bcryptjs**
- **Sequelize**
- **Joi**
- **Helmet**

[Ir para o sumário](#sumário)

## Não se preocupe com o ambiente de desenvolvimento

Você não tem o Node instalado em sua máquina? Fique tranquilo, aqui você só precisa de um pré-requisito.

Com o Docker instalado, você pode executar todo o projeto sem maiores preocupações, sem se preocupar com as versões ou o ambiente em que a aplicação será executada.

Caso ainda não tenha instalado, aqui está o [Docker Desktop](https://docs.docker.com/desktop/) com versão gráfica. Se preferir fazer tudo pelo terminal, utilize o [Docker Engine](https://docs.docker.com/engine/). Em ambos os casos, basta verificar qual é o seu sistema operacional e seguir o passo-a-passo. Se tiver alguma dificuldade, pode me chamar pelo meu [LinkedIn](https://www.linkedin.com/in/jhony-altoe/), será um prazer ajudar.

[Ir para o sumário](#sumário)

## Rodando a aplicação com o Docker
- **Passo 1:** Faça o clone do repositório

  `git clone git@github.com:JhonyAltoe/blogs-api-back-end.git`

- **Passo 2:** Acesse a pasta raiz do projeto

  `cd blogs-api-back-end`
  
- **Passo 3:** Uma vez no diretório raiz, instale as dependências

  `npm install`

- **Passo 4:** Renomeie o arquivo `.env.example` para `.env`, onde contém as variáveis de ambiente

- **Passo 5:** Execute o Docker Compose para executar os serviços Node e MySQL

  `docker-compose up -d --build`
  
  OU
  
  `docker compose up -d --build`

  Dependendo da versão do seu Docker.

> **Obs.:** Caso ocorra algum problema ao executar o `docker-compose`, uma possível solução é remover todos os containers e executar o comando novamente. Caso precise de ajuda, pode me chamar no meu [LinkedIn](https://www.linkedin.com/in/jhony-altoe/). Fique à vontade!

- **Passo 6:** Agora, para fazer o Sequelize criar o banco de dados e as tabelas, execute os seguintes comandos sequencialmente e **separadamente**

  `npm run createdb`
  
  `npm run migratedb`

> **Obs.:** Execute primeiro o `npm run createdb` e, em seguida, `npm run migratedb`, nessa ordem e **separadamente**. O motivo é que, em testes locais, ao executar os dois comandos juntos, pode ocorrer um problema ainda desconhecido até o momento. Esse problema retorna a mensagem `ERROR: Connection lost: The server closed the connection.` e normalmente é resolvido com várias tentativas consecutivas ou executando separadamente, conforme apresentado acima. Depois disso, a aplicação funcionará normalmente.

- **Passo 7:** Agora vamos fazer o Sequelize popular nossas tabelas para podermos testar. Execute o seguinte comando

  `npm run seed`

- **Passo 8:** Finalmente, execute a API com um dos seguintes comandos

  `npm run debug` para executar no modo desenvolvedor. Isso permite que qualquer alteração feita no diretório `src` seja aplicada automaticamente, sem a necessidade de reiniciar manualmente.
  
  `npm start` para executar no modo de produção.

___
> **Observação**
> Várias das rotas requerem que o **token** seja passado no cabeçalho da requisição. Existem duas maneiras de obter esse **token**: a primeira é criar um novo usuário na rota `POST /user` e a segunda é fazer login na rota `POST /login`. Ambas retornam o **token** no corpo da resposta. Consulte a [Documentação](https://documenter.getpostman.com/view/23798069/2s83zjt3te) para mais detalhes.

[Ir para o sumário](#sumário)

## Documentação
Eu criei uma documentação detalhada utilizando o Postman. Fique à vontade para conferir [aqui](https://documenter.getpostman.com/view/23798069/2s83zjt3te).

[Ir para o sumário](#sumário)