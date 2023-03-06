# Dev notes

- Basis.
- Database.
- Testing.

Basis:

- Address has first and last name because there is only address with a recipient.

  - Another way to think about it is that an Address is a Destination.

Database

- Seeding with typeorm-extention is not working.
  - This is because there are several ManyToMany relations that have no entity definitions.
  - No entity definitions means that you can't use the seeder functionality of typeorm-extention.
  - The workaround is to put the seeding SQL into migration files that run after the table create migration.

Testing

- If a test can't find a dependency and it asks if xxxService is added as a dependency, it is likely due to incomplete implementation of a module.

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
