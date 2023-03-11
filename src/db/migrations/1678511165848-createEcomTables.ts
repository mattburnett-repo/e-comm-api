import { MigrationInterface, QueryRunner } from 'typeorm'

export class createEcomTables1678511165848 implements MigrationInterface {
  name = 'createEcomTables1678040718350'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "first_name" character varying(100), "last_name" character varying(100), "address_1" character varying(100) NOT NULL, "address_2" character varying(100), "city" character varying(100) NOT NULL, "state_province" character varying(100) NOT NULL, "postal_code" character varying(20) NOT NULL, "country" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "address_pkey" ON "address" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "payment_type" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f301e328eaf2127773c889ab94" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "payment_type_pkey" ON "payment_type" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "stripe_id" character varying(100), "created" integer, "payment_method" character varying(100), "receipt_url" character varying(200), "transaction_status" character varying(50), "amount" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "payment_type_id" integer, "userId" uuid, CONSTRAINT "REL_045d4c3aa6a3051cc2b586cc2d" UNIQUE ("payment_type_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`
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
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order_date" date DEFAULT ('now'::text)::date, "tax" numeric(6,2), "total_price" numeric(6,2), "payment_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "order_pkey" ON "order" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5e2fe672eea8e068056fce87256" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cart-type_pkey" ON "cart_type" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150), "description" character varying(150), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "cart_pkey" ON "cart" ("id") `)
    await queryRunner.query(
      `CREATE TABLE "cart_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_id" uuid NOT NULL, "product_name" character varying NOT NULL, "product_quantity" integer NOT NULL, "product_price" numeric(6,2) NOT NULL, "line_item_total_price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cart_id" uuid, CONSTRAINT "PK_38bfe36f7fb1e8d1f1073b0e49b" PRIMARY KEY ("id", "product_id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cart-item_pkey" ON "cart_item" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "testString" character varying, "testNumber" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "image_url" character varying(250), "price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "product_pkey" ON "product" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "product-category_pkey" ON "product_category" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "user_cart" ("user_id" uuid NOT NULL, "cart_id" uuid NOT NULL, CONSTRAINT "PK_0f62dc962052fea2430d5a85f2b" PRIMARY KEY ("user_id", "cart_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_f47da2f31dce6d741ab6c106f5" ON "user_cart" ("user_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_8d4ea2f9873348b7aa93236fa1" ON "user_cart" ("cart_id") `
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
      `CREATE TABLE "cart_type_cart_cart" ("cartTypeId" integer NOT NULL, "cartId" uuid NOT NULL, CONSTRAINT "PK_1184090c5c327b89dd08c9a4f2a" PRIMARY KEY ("cartTypeId", "cartId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_357dec21e62c3d3b7101310156" ON "cart_type_cart_cart" ("cartTypeId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_ffd839f21bbbe52d84f65a0e48" ON "cart_type_cart_cart" ("cartId") `
    )
    await queryRunner.query(
      `CREATE TABLE "product_category_product_product" ("productCategoryId" integer NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_dc31b861b43d79be59b2bc31dca" PRIMARY KEY ("productCategoryId", "productId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_3a363a26c018dad28f060a54b2" ON "product_category_product_product" ("productCategoryId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_d5378480846db73d583067f266" ON "product_category_product_product" ("productId") `
    )
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7" FOREIGN KEY ("payment_type_id") REFERENCES "payment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_b046318e0b341a7f72110b75857" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" ADD CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" ADD CONSTRAINT "FK_f47da2f31dce6d741ab6c106f55" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" ADD CONSTRAINT "FK_8d4ea2f9873348b7aa93236fa14" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" ADD CONSTRAINT "FK_051d56b1b369171c64f9c3d2545" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" ADD CONSTRAINT "FK_c3228fc681bcef672352d2186ef" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_type_cart_cart" ADD CONSTRAINT "FK_357dec21e62c3d3b71013101562" FOREIGN KEY ("cartTypeId") REFERENCES "cart_type"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_type_cart_cart" ADD CONSTRAINT "FK_ffd839f21bbbe52d84f65a0e48b" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "product_category_product_product" ADD CONSTRAINT "FK_3a363a26c018dad28f060a54b2d" FOREIGN KEY ("productCategoryId") REFERENCES "product_category"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "product_category_product_product" ADD CONSTRAINT "FK_d5378480846db73d583067f266d" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_category_product_product" DROP CONSTRAINT "FK_d5378480846db73d583067f266d"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_category_product_product" DROP CONSTRAINT "FK_3a363a26c018dad28f060a54b2d"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_type_cart_cart" DROP CONSTRAINT "FK_ffd839f21bbbe52d84f65a0e48b"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_type_cart_cart" DROP CONSTRAINT "FK_357dec21e62c3d3b71013101562"`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" DROP CONSTRAINT "FK_c3228fc681bcef672352d2186ef"`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart_cart" DROP CONSTRAINT "FK_051d56b1b369171c64f9c3d2545"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" DROP CONSTRAINT "FK_8d4ea2f9873348b7aa93236fa14"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" DROP CONSTRAINT "FK_f47da2f31dce6d741ab6c106f55"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" DROP CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941"`
    )
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_b046318e0b341a7f72110b75857"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7"`
    )
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d5378480846db73d583067f266"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3a363a26c018dad28f060a54b2"`
    )
    await queryRunner.query(`DROP TABLE "product_category_product_product"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ffd839f21bbbe52d84f65a0e48"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_357dec21e62c3d3b7101310156"`
    )
    await queryRunner.query(`DROP TABLE "cart_type_cart_cart"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c3228fc681bcef672352d2186e"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_051d56b1b369171c64f9c3d254"`
    )
    await queryRunner.query(`DROP TABLE "order_cart_cart"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8d4ea2f9873348b7aa93236fa1"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f47da2f31dce6d741ab6c106f5"`
    )
    await queryRunner.query(`DROP TABLE "user_cart"`)
    await queryRunner.query(`DROP INDEX "public"."product-category_pkey"`)
    await queryRunner.query(`DROP TABLE "product_category"`)
    await queryRunner.query(`DROP INDEX "public"."product_pkey"`)
    await queryRunner.query(`DROP TABLE "product"`)
    await queryRunner.query(`DROP TABLE "example"`)
    await queryRunner.query(`DROP INDEX "public"."cart-item_pkey"`)
    await queryRunner.query(`DROP TABLE "cart_item"`)
    await queryRunner.query(`DROP INDEX "public"."cart_pkey"`)
    await queryRunner.query(`DROP TABLE "cart"`)
    await queryRunner.query(`DROP INDEX "public"."cart-type_pkey"`)
    await queryRunner.query(`DROP TABLE "cart_type"`)
    await queryRunner.query(`DROP INDEX "public"."order_pkey"`)
    await queryRunner.query(`DROP TABLE "order"`)
    await queryRunner.query(`DROP INDEX "public"."user_pkey"`)
    await queryRunner.query(`DROP INDEX "public"."user_user_name_key"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP INDEX "public"."payment_pkey"`)
    await queryRunner.query(`DROP TABLE "payment"`)
    await queryRunner.query(`DROP INDEX "public"."payment_type_pkey"`)
    await queryRunner.query(`DROP TABLE "payment_type"`)
    await queryRunner.query(`DROP INDEX "public"."address_pkey"`)
    await queryRunner.query(`DROP TABLE "address"`)
  }
}
