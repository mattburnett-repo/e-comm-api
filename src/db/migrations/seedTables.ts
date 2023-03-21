import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedTables implements MigrationInterface {
  name = 'seedTables1678040718351'

  public async up(queryRunner: QueryRunner): Promise<void> {
    //  Base data tables
    await queryRunner.query(
      `INSERT INTO "user" VALUES ('964275ed-f9da-49b6-8fde-9da1d472197b', 'HappyCustomer', 'happy@customer.com', 'happyCustomer', 'Happy', 'Customer')`
    )
    await queryRunner.query(
      `INSERT INTO "user" VALUES ('cfad3828-bfdc-11ed-afa1-0242ac120002', 'AddressTestUser', 'address@test.user.com', 'password', 'Address', 'TestUser')`
    )
    await queryRunner.query(
      `INSERT INTO address VALUES ('324e2014-bafb-11ed-afa1-0242ac120002', '964275ed-f9da-49b6-8fde-9da1d472197b', 'Test First name', 'Test Last Name', '123 Street Ave.', 'Suite 3', 'Test City', 'Test State', '12345', 'Deutschland', Now(), Now())`
    )
    await queryRunner.query(
      `INSERT INTO cart VALUES ('fad30dac-baf5-11ed-afa1-0242ac120002', '964275ed-f9da-49b6-8fde-9da1d472197b', 'Test Cart Name', 'Test Cart Description', Now())`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES (1, 'paypal', 'PayPal')`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES (2, 'masterCard', 'MasterCard')`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES (3, 'visa', 'Visa')`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES (4, 'amex', 'American Express')`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES (5, 'ecKarte', 'European Central Bank')`
    )
    await queryRunner.query(
      `INSERT INTO payment_type VALUES(6, 'applePay', 'Apple Pay')`
    )
    await queryRunner.query(
      `INSERT INTO payment VALUES('cfdd4196-bb02-11ed-afa1-0242ac120002', '964275ed-f9da-49b6-8fde-9da1d472197b', 6, 'stripeId-test-value', 12345, 'test payment method', 'https://receipt-url.com', 'test transaction status', 123.45)`
    )
    await queryRunner.query(
      `INSERT INTO "order" VALUES ('1882376c-bafe-11ed-afa1-0242ac120002', 'fad30dac-baf5-11ed-afa1-0242ac120002', 'cfad3828-bfdc-11ed-afa1-0242ac120002', Now(),  1.23, 3.45, '964275ed-f9da-49b6-8fde-9da1d472197b', Now(), Now())`
    )
    await queryRunner.query(
      `INSERT INTO product_category VALUES(1,'Solar Energy','Solar energy is a renewable energy source that can be harnessed to power a variety of devices and systems, from small handheld gadgets to large-scale buildings.')`
    )
    await queryRunner.query(
      `INSERT INTO product_category VALUES(2, 'Electric Vehicles', 'Electric vehicles are powered by electricity rather than gasoline or diesel, which makes them much more sustainable and eco-friendly. They also have lower emissions and are more energy-efficient than traditional vehicles.')`
    )
    await queryRunner.query(
      `INSERT INTO product_category VALUES(3, 'Bamboo', 'Bamboo is a highly sustainable and renewable resource that grows quickly and doesn''t require as much water as other plants. It can be used to create a wide range of products, including furniture, flooring, and textiles.')`
    )
    await queryRunner.query(
      `INSERT INTO product_category VALUES(4, 'Biodegradable Packaging', 'Biodegradable packaging is made from materials that can be easily broken down and recycled, such as paper, plant-based plastics, and compostable materials. It is much better for the environment than traditional plastic packaging.')`
    )
    await queryRunner.query(
      `INSERT INTO product_category VALUES(5, 'Organic and natural personal care products','Organic and natural personal care products are made with ingredients that are sustainably sourced and don''t contain harmful chemicals or synthetic fragrances. They are better for both the environment and your health.')`
    )
    // sub category values
    await queryRunner.query(
      `INSERT INTO sub_category VALUES(1, 'featured', 'Featured')`
    )
    await queryRunner.query(
      `INSERT INTO sub_category VALUES(2, 'trending', 'Trending')`
    )
    await queryRunner.query(
      `INSERT INTO sub_category VALUES(3, 'sale', 'Sale')`
    )

    // Many-to-many / Association / Join tables
    await queryRunner.query(
      `INSERT INTO order_cart_cart VALUES('1882376c-bafe-11ed-afa1-0242ac120002', 'fad30dac-baf5-11ed-afa1-0242ac120002')`
    )
    // await queryRunner.query(
    //   `INSERT INTO user_cart VALUES('964275ed-f9da-49b6-8fde-9da1d472197b', 'fad30dac-baf5-11ed-afa1-0242ac120002')`
    // )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prettier/prettier, @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> { }
}
