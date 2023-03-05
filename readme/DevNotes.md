# Dev notes

- Basis.

Basis:

- Address has first and last name because there is only address with a recipient.

  - Another way to think about it is that an Address is a Destination.

- Database
  - Seeding with typeorm-extention is not working.
    - This is because there are several ManyToMany relations that have no entity definitions.
    - No entity definitions means that you can't use the seeder functionality of typeorm-extention.
    - The workaround is to put the seeding SQL into a migration file that runs after the table create migration.
