# GoBarber Api

## 💇🏻‍♂️ Sobre

Esta api permite realizar a autenticação de usuários e realizar agendamentos.

Os clientes podem acessar o aplicativo e agendar o melhor horário disponível para si e ver os seus agendamentos.

Os prestadores de serviço, através da plataforma web, podem ver os seus agendamentos, gerenciar o tempo e ver se um agendamento foi cancelado.

Para ver a **Plataforma Web**, clique aqui: [GoBarber Web](https://github.com/azotief/rocketseat/tree/master/gostack/gobarber/web)<br />
Para ver o **Aplicativo Mobile**, clique aqui: [GoBarber Mobile](https://github.com/azotief/rocketseat/tree/master/gostack/gobarber/mobile)

## 🚀 Tecnologias

Tecnologias utilizadas no desenvolvimento desta api.

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [celebrate](https://github.com/arb/celebrate)
- [class-transformer](https://github.com/typestack/class-transformer)
- [Nodemailer](https://nodemailer.com/about/)
- [AWS](https://www.npmjs.com/package/aws-sdk)
- [ioredis](https://github.com/luin/ioredis)
- [redis](https://redis.io/)
- [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Como rodar

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/)
- Uma instância do [MongoDB](https://www.mongodb.com/)
- Uma instância do [Redis](https://redis.io/)

> Observação: Para criar as instâncias dos serviços acima, é recomendado utilizar o Docker.

**Faça um clone do repositório principal e acesse a pasta da api**

```bash
$ git clone https://github.com/azotief/rocketseat.git && cd rocketseat/gostack/gobarber/server
```

**Faça uma cópia do arquivo '.env.example' para '.env' e preencha com as suas variáveis de ambiente**

> As variáveis da AWS não precisam ser preenchidas em ambiente de desenvolvimento.

**Exemplo**
```bash
# Application
APP_JWT_SECRET=YOUR_JWT_SECRET

APP_API_URL=http://localhost:3333
APP_WEB_URL=http://localhost:3000

# AWS Credentials
# AWS_ACCESS_KEY_ID=
# AWS_SECRET_ACCESS_KEY=

# Mail
APP_MAIL_DRIVER=ethereal

# Storage
APP_STORAGE_DRIVER=disk
```

**Siga os passos a seguir**

```bash
# Instalar todas as dependências
$ yarn

# Criar uma instância do PostgreSQL utilizando o Docker
$ docker run --name gostack postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Criar uma instância do MongoDB utilizando o Docker
$ docker run --name gostack_mongo -p 27017:27017 -d -t mongo

# Criar uma instância do Redis utilizando o Docker
$ docker run --name gostack_redis -p 6379:6379 -d -t redis:alpine

# Uma vez que os serviços acima estão em execução, rode as migrations
$ yarn typeorm migration:run

# Por fim, execute o comando abaixo para rodar a api
$ yarn dev:server

# Pronto! A api está rodando.
```

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

🚀 Feito por Bruno Fernando Feitoza &nbsp; | &nbsp;[Meu LinkedIn](https://www.linkedin.com/in/brunofeitoza634/)
