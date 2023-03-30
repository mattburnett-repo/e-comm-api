import { MigrationInterface, QueryRunner } from 'typeorm'

export class createEcomTables1680093954669 implements MigrationInterface {
  name = 'createEcomTables1678040718350'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product_category" ("id" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "product-category_pkey" ON "product_category" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "sub_category" ("id" integer NOT NULL, "code" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_59f4461923255f1ce7fc5e7423c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "product-subcategory_pkey" ON "sub_category" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "image_01_url" character varying(250), "image_02_url" character varying(250), "price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "product_pkey" ON "product" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cart_id" uuid NOT NULL, "product_id" uuid NOT NULL, "product_name" character varying NOT NULL, "product_quantity" integer NOT NULL, "product_price" numeric(6,2) NOT NULL, "line_item_total_price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_67a2e8406e01ffa24ff9026944" UNIQUE ("product_id"), CONSTRAINT "PK_bd94725aa84f8cf37632bcde997" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cart-item_pkey" ON "cart_item" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "name" character varying(150), "description" character varying(150), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "cart_pkey" ON "cart" ("id") `)
    await queryRunner.query(
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cart_id" character varying, "user_id" uuid, "stripe_id" character varying, "order_date" TIMESTAMP NOT NULL DEFAULT now(), "tax" numeric(6,2), "total_price" numeric(6,2) NOT NULL, "payment_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "order_pkey" ON "order" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "payment_type" ("id" integer NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f301e328eaf2127773c889ab94" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "payment_type_pkey" ON "payment_type" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "payment_type_id" integer NOT NULL, "stripe_id" character varying(100), "created" integer, "payment_method" character varying(100), "receipt_url" character varying(200), "transaction_status" character varying(50), "amount" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "payment_pkey" ON "payment" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying, "password" character varying NOT NULL, "first_name" character varying, "last_name" character varying, "google_id" character varying(100), "google_display_name" character varying(100), "google_first_name" character varying(100), "google_last_name" character varying(100), "google_image" character varying(250), "refreshToken" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user_user_name_key" ON "user" ("username") `
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "user_pkey" ON "user" ("id") `)
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "first_name" character varying(100), "last_name" character varying(100), "address_1" character varying(100) NOT NULL, "address_2" character varying(100), "city" character varying(100) NOT NULL, "state_province" character varying(100) NOT NULL, "postal_code" character varying(20) NOT NULL, "country" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "address_pkey" ON "address" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "testString" character varying, "testNumber" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "product_product_category" ("product_id" uuid NOT NULL, "product_category_id" integer NOT NULL, CONSTRAINT "PK_75a4ebdf54e893a0f12c4286f18" PRIMARY KEY ("product_id", "product_category_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_7273f54c7b24fa0968847cd813" ON "product_product_category" ("product_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_88d0a3fddb81d64b2f1fad3359" ON "product_product_category" ("product_category_id") `
    )
    await queryRunner.query(
      `CREATE TABLE "product_sub_category" ("product_id" uuid NOT NULL, "sub_category_id" integer NOT NULL, CONSTRAINT "PK_d89ae1654c8f5e49c98ac52020e" PRIMARY KEY ("product_id", "sub_category_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_9085e8522a3cfa66883332e521" ON "product_sub_category" ("product_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_6911c50c5c114253dd22727b61" ON "product_sub_category" ("sub_category_id") `
    )
    await queryRunner.query(
      `CREATE TABLE "order_cart_cart" ("orderId" uuid NOT NULL, "cartId" uuid NOT NULL, CONSTRAINT "PK_d4ddbeb2b83a2a324d0bfc2be11" PRIMARY KEY ("orderId", "cartId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_051d56b1b369171c64f9c3d254" ON "order_cart_cart" ("orderId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_c3228fc681bcef672352d2186e" ON "order_cart_cart" ("cartId") `
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" ADD CONSTRAINT "FK_67a2e8406e01ffa24ff9026944e" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" ADD CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "cart" ADD CONSTRAINT "FK_f091e86a234693a49084b4c2c86" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7" FOREIGN KEY ("payment_type_id") REFERENCES "payment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_7273f54c7b24fa0968847cd813f" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "product_sub_category" ADD CONSTRAINT "FK_9085e8522a3cfa66883332e521a" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "product_sub_category" ADD CONSTRAINT "FK_6911c50c5c114253dd22727b615" FOREIGN KEY ("sub_category_id") REFERENCES "sub_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" ADD CONSTRAINT "FK_051d56b1b369171c64f9c3d2545" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" ADD CONSTRAINT "FK_c3228fc681bcef672352d2186ef" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" DROP CONSTRAINT "FK_c3228fc681bcef672352d2186ef"`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" DROP CONSTRAINT "FK_051d56b1b369171c64f9c3d2545"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_sub_category" DROP CONSTRAINT "FK_6911c50c5c114253dd22727b615"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_sub_category" DROP CONSTRAINT "FK_9085e8522a3cfa66883332e521a"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_7273f54c7b24fa0968847cd813f"`
    )
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7"`
    )
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart" DROP CONSTRAINT "FK_f091e86a234693a49084b4c2c86"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" DROP CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" DROP CONSTRAINT "FK_67a2e8406e01ffa24ff9026944e"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c3228fc681bcef672352d2186e"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_051d56b1b369171c64f9c3d254"`
    )
    await queryRunner.query(`DROP TABLE "order_cart_cart"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6911c50c5c114253dd22727b61"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9085e8522a3cfa66883332e521"`
    )
    await queryRunner.query(`DROP TABLE "product_sub_category"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_88d0a3fddb81d64b2f1fad3359"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7273f54c7b24fa0968847cd813"`
    )
    await queryRunner.query(`DROP TABLE "product_product_category"`)
    await queryRunner.query(`DROP TABLE "example"`)
    await queryRunner.query(`DROP INDEX "public"."address_pkey"`)
    await queryRunner.query(`DROP TABLE "address"`)
    await queryRunner.query(`DROP INDEX "public"."user_pkey"`)
    await queryRunner.query(`DROP INDEX "public"."user_user_name_key"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP INDEX "public"."payment_pkey"`)
    await queryRunner.query(`DROP TABLE "payment"`)
    await queryRunner.query(`DROP INDEX "public"."payment_type_pkey"`)
    await queryRunner.query(`DROP TABLE "payment_type"`)
    await queryRunner.query(`DROP INDEX "public"."order_pkey"`)
    await queryRunner.query(`DROP TABLE "order"`)
    await queryRunner.query(`DROP INDEX "public"."cart_pkey"`)
    await queryRunner.query(`DROP TABLE "cart"`)
    await queryRunner.query(`DROP INDEX "public"."cart-item_pkey"`)
    await queryRunner.query(`DROP TABLE "cart_item"`)
    await queryRunner.query(`DROP INDEX "public"."product_pkey"`)
    await queryRunner.query(`DROP TABLE "product"`)
    await queryRunner.query(`DROP INDEX "public"."product-subcategory_pkey"`)
    await queryRunner.query(`DROP TABLE "sub_category"`)
    await queryRunner.query(`DROP INDEX "public"."product-category_pkey"`)
    await queryRunner.query(`DROP TABLE "product_category"`)
  }
}
