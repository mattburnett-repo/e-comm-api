# Installation and setup

- Clone, reset git and install the code.
- Set up a database.
- Run database migrations and seeding.
- Run tests.
- Start the app.

Create the project folder and change into it

```bash
mkdir <your project / folder name>
cd <your project / folder name>
```

Clone the repo (Don't forget the ' . ' at the end!)

```bash
git clone https://github.com/mattburnett-repo/nestjs-api-template.git .
```

Delete this file, if it is present.

```bash
rm -rf fly.toml
```

Reset the project's git repository.

Edit the project information in `package.json` header.

```bash
  "name": the.project.name,
  "version": the.project.version,
  "description": the.project.description,
  "author": the.project.author,
  "private": true or false,
  "license": the.project.license,
```

```bash
rm -rf .git
git init
```

Copy the sample.env to the .env files

```bash
cp sample.env .env            # default .env
cp sample.env .env.local      # connects local develpment to a localhost database
cp sample.env .env.deployed   # connects local development to a remote / deployed database
cp sample.env .env.test       # for running tests locally. Also useful as a secrets source for CI/CD, eg. GitHub Actions
```

Create a new repo on GitHub for your project and configure your new, local git repo to use the new GitHub repository as a remote.

Install the node_modules

```bash
yarn install
```

Create the database manually.

- This repo uses `typeorm-extention` to create / seed / drop the database. However, [there are problems with the create / drop functionality when using Postgres](https://github.com/tada5hi/typeorm-extension/discussions/401).
  - TL;DR it's less work to create the database manually.

Once a database is available to your project, set the .env vars with your project's database-specific connection info and jwt secrets.

```bash
DB_TYPE=
DB_HOST=
DB_PORT=
DB_USER_NAME=
DB_PASSWORD=
DB_DATABASE_NAME=
DB_SSL_MODE=    # Postgress specific. Usually 'false' (with single quotes) for localhost database, usually 'true' (with single quotes) for remote database

API_PORT= # 4000

SWAGGER_USER=
SWAGGER_PASSWORD=

JWT_SECRET=
JWT_REFRESH_SECRET=
```

- If you need a JWT secret, a quick way to get one is in a terminal (use a larger randomBytes() value to make a longer secret string)

  ```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('base64'));"
  ```

If you are not using Postgres as a database, you will need to make some changes to the `dbConfig` and `cliConfig` files. More info is provided in the 'Database config' paragraph of the [Dev notes](./DevNotes.md) document.

Run the migrations

```bash
yarn migration:run:local
```

Run the seeders using

```bash
yarn type-ext:db:seed
```

- If there are Postgres errors about uuid_v4 not being available, go to pqsql / pgAdmin / etc. and run the following, as you would run a regular SQL statement
  ```bash
  create extension "uuid-ossp";
  ```

Run the tests

```bash
yarn test
yarn test:e2e
```

- If there are Postgres errors about uuid_v4 not being available, go to pqsql / pgAdmin / etc. and run the following, as you would run a regular SQL statement
  ```bash
  create extension "uuid-ossp";
  ```

Start the app in dev / watch mode

```bash
  yarn start:dev
```

Find the app at [localhost:4000](http://localhost:4000).

- You should see a 'hello world' message.

Find the Swagger / OpenAPI docs at [localhost:4000/api](http://localhost:4000/api).

- Log in with the values of environment variables `SWAGGER_USER` and `SWAGGER_PASSWORD`.
- You should see a Swagger page displaying 'example', 'users' and 'auth'.
- You can edit the title and description in the file [main.ts](./src/main.ts), in the `const swaggerConfig` block.

You can then build out data seeders for your database.

- This template uses `factories` and `seeders`.
- You can find examples in their own folders under the `src/db` folder, which you can run to get a sense of how the seeding process works.

If you run the seeders 'out-of-the-box', you should have some test data in tables called `examples` and `user`.

Look over the [Dev notes](./DevNotes.md) page for more info.
