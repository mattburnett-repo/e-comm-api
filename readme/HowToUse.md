# How to use

If there are questions about NestJS, the [Overview](https://docs.nestjs.com/) section of the docs is a good place to start.

If you just want to jump in and see what happens, you can [create new endpoint with nest g resource <resource.name.goes.here>](https://docs.nestjs.com/recipes/crud-generator#generating-a-new-resource), and follow the `example` code provided in this repo.

- Here is a general guide for getting started. Look at existing app / auth / example / user code for further guidance.

  - nest g resource _name-of-project_
  - Fill out as needed, referring to app / auth / example / user code when necessary

    - Use class-validator (ie. @IsUUID, @IsNotEmpty, etc.) decorators as much as possible.
    - entity
      - create an entities folder
        - create entity file (xxx.entity.ts)
      - migration:generate:local / migration:run:local
    - dto
    - service
    - controller
    - module
    - tests

      - If you run into NestJS issues where a test can't find a dependency and it asks in xxxService is added as a dependency, it is likely due to incomplete implementation of a module.

      - Start by importing `TypeOrmModule`, and add `imports:` and `exports:` statments to your module. Here is an example:

        ```javascript
        import { Module } from '@nestjs/common'
        import { TypeOrmModule } from '@nestjs/typeorm'

        import { User } from './entities/user.entity'
        import { UserService } from './user.service'
        import { UserController } from './user.controller'

        @Module({
          imports: [TypeOrmModule.forFeature([User])],
          controllers: [UserController],
          providers: [UserService],
          exports: [UserService]
        })
        // eslint-disable-next-line prettier/prettier
        export class UserModule {}
        ```

  - Keep the docs up to date
    ```bash
    yarn docs:create
    ```
  - Keep the README.md file accurate and up to date.
