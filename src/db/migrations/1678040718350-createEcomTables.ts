import { MigrationInterface, QueryRunner } from 'typeorm'

export class createEcomTables1678040718350 implements MigrationInterface {
  name = 'createEcomTables1678040718350'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cart_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cart_id" uuid NOT NULL, "product_id" uuid NOT NULL, "product_name" character varying NOT NULL, "product_quantity" integer NOT NULL, "product_price" numeric(6,2) NOT NULL, "line_item_total_price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0d25676d0e5dcdcc66c978e631e" PRIMARY KEY ("id", "cart_id", "product_id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cart-item_pkey" ON "cart_item" ("cart_id") `
    )
    await queryRunner.query(
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order_date" date DEFAULT ('now'::text)::date, "tax" numeric(6,2), "total_price" numeric(6,2), "payment_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "order_pkey" ON "order" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150), "description" character varying(150), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "cart_pkey" ON "cart" ("id") `)
    await queryRunner.query(
      `CREATE TABLE "cart_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5e2fe672eea8e068056fce87256" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "cart-type_pkey" ON "cart_type" ("id") `
    )
    await queryRunner.query(
      `CREATE TABLE "example" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "testString" character varying, "testNumber" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100), "last_name" character varying(100), "address_1" character varying(100) NOT NULL, "address_2" character varying(100), "city" character varying(100) NOT NULL, "state_province" character varying(100) NOT NULL, "postal_code" character varying(20) NOT NULL, "country" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`
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
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying, "password" character varying NOT NULL, "first_name" character varying, "last_name" character varying, "google_id" character varying(100), "google_display_name" character varying(100), "google_first_name" character varying(100), "google_last_name" character varying(100), "google_image" character varying(250), "refreshToken" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user_user_name_key" ON "user" ("username") `
    )
    await queryRunner.query(`CREATE UNIQUE INDEX "user_pkey" ON "user" ("id") `)
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "stripe_id" character varying(100), "created" integer, "payment_method" character varying(100), "receipt_url" character varying(200), "transaction_status" character varying(50), "amount" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "payment_type_id" integer, CONSTRAINT "REL_045d4c3aa6a3051cc2b586cc2d" UNIQUE ("payment_type_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "payment_pkey" ON "payment" ("id") `
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
      `CREATE TABLE "order_cart" ("order_id" uuid NOT NULL, "cart_id" uuid NOT NULL, CONSTRAINT "PK_03c3b56ec2d5e2c3052ee927dc1" PRIMARY KEY ("order_id", "cart_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_78de6917bdfe82eb63de7602dd" ON "order_cart" ("order_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_802dde4755469e47f26aec0bd1" ON "order_cart" ("cart_id") `
    )
    await queryRunner.query(
      `CREATE TABLE "cart_cart_type" ("cart_id" uuid NOT NULL, "cart_type_id" integer NOT NULL, CONSTRAINT "PK_6fb2200a90ea5dcffd04be96152" PRIMARY KEY ("cart_id", "cart_type_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_66e3005916835a3475270d4bcf" ON "cart_cart_type" ("cart_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_808f671e51da0e7e5608dc76d9" ON "cart_cart_type" ("cart_type_id") `
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
      `CREATE TABLE "user_order" ("user_id" uuid NOT NULL, "order_id" uuid NOT NULL, CONSTRAINT "PK_a32839ae5b41a9f11274ec0e2be" PRIMARY KEY ("user_id", "order_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_17358ef99f9a841dc7089e4edf" ON "user_order" ("user_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_f0f3c0497bf21e57b40966ae59" ON "user_order" ("order_id") `
    )
    await queryRunner.query(
      `CREATE TABLE "user_address" ("user_id" uuid NOT NULL, "address_id" uuid NOT NULL, CONSTRAINT "PK_355cdefb5d1a7e44efb77a52519" PRIMARY KEY ("user_id", "address_id"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_29d6df815a78e4c8291d3cf5e5" ON "user_address" ("user_id") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_b3bdd98c49956021c44c23a48c" ON "user_address" ("address_id") `
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
      `ALTER TABLE "cart_item" ADD CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7" FOREIGN KEY ("payment_type_id") REFERENCES "payment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart" ADD CONSTRAINT "FK_78de6917bdfe82eb63de7602dd7" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart" ADD CONSTRAINT "FK_802dde4755469e47f26aec0bd1a" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_cart_type" ADD CONSTRAINT "FK_66e3005916835a3475270d4bcf2" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_cart_type" ADD CONSTRAINT "FK_808f671e51da0e7e5608dc76d9f" FOREIGN KEY ("cart_type_id") REFERENCES "cart_type"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" ADD CONSTRAINT "FK_f47da2f31dce6d741ab6c106f55" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" ADD CONSTRAINT "FK_8d4ea2f9873348b7aa93236fa14" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_order" ADD CONSTRAINT "FK_17358ef99f9a841dc7089e4edf0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_order" ADD CONSTRAINT "FK_f0f3c0497bf21e57b40966ae592" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "user_address" ADD CONSTRAINT "FK_b3bdd98c49956021c44c23a48c4" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_7273f54c7b24fa0968847cd813f" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593"`
    )
    await queryRunner.query(
      `ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_7273f54c7b24fa0968847cd813f"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_address" DROP CONSTRAINT "FK_b3bdd98c49956021c44c23a48c4"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_order" DROP CONSTRAINT "FK_f0f3c0497bf21e57b40966ae592"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_order" DROP CONSTRAINT "FK_17358ef99f9a841dc7089e4edf0"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" DROP CONSTRAINT "FK_8d4ea2f9873348b7aa93236fa14"`
    )
    await queryRunner.query(
      `ALTER TABLE "user_cart" DROP CONSTRAINT "FK_f47da2f31dce6d741ab6c106f55"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_cart_type" DROP CONSTRAINT "FK_808f671e51da0e7e5608dc76d9f"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_cart_type" DROP CONSTRAINT "FK_66e3005916835a3475270d4bcf2"`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart" DROP CONSTRAINT "FK_802dde4755469e47f26aec0bd1a"`
    )
    await queryRunner.query(
      `ALTER TABLE "order_cart" DROP CONSTRAINT "FK_78de6917bdfe82eb63de7602dd7"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b"`
    )
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7"`
    )
    await queryRunner.query(
      `ALTER TABLE "cart_item" DROP CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_88d0a3fddb81d64b2f1fad3359"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7273f54c7b24fa0968847cd813"`
    )
    await queryRunner.query(`DROP TABLE "product_product_category"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b3bdd98c49956021c44c23a48c"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_29d6df815a78e4c8291d3cf5e5"`
    )
    await queryRunner.query(`DROP TABLE "user_address"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f0f3c0497bf21e57b40966ae59"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_17358ef99f9a841dc7089e4edf"`
    )
    await queryRunner.query(`DROP TABLE "user_order"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8d4ea2f9873348b7aa93236fa1"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f47da2f31dce6d741ab6c106f5"`
    )
    await queryRunner.query(`DROP TABLE "user_cart"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_808f671e51da0e7e5608dc76d9"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_66e3005916835a3475270d4bcf"`
    )
    await queryRunner.query(`DROP TABLE "cart_cart_type"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_802dde4755469e47f26aec0bd1"`
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_78de6917bdfe82eb63de7602dd"`
    )
    await queryRunner.query(`DROP TABLE "order_cart"`)
    await queryRunner.query(`DROP INDEX "public"."product-category_pkey"`)
    await queryRunner.query(`DROP TABLE "product_category"`)
    await queryRunner.query(`DROP INDEX "public"."product_pkey"`)
    await queryRunner.query(`DROP TABLE "product"`)
    await queryRunner.query(`DROP INDEX "public"."payment_pkey"`)
    await queryRunner.query(`DROP TABLE "payment"`)
    await queryRunner.query(`DROP INDEX "public"."user_pkey"`)
    await queryRunner.query(`DROP INDEX "public"."user_user_name_key"`)
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP INDEX "public"."payment_type_pkey"`)
    await queryRunner.query(`DROP TABLE "payment_type"`)
    await queryRunner.query(`DROP INDEX "public"."address_pkey"`)
    await queryRunner.query(`DROP TABLE "address"`)
    await queryRunner.query(`DROP TABLE "example"`)
    await queryRunner.query(`DROP INDEX "public"."cart-type_pkey"`)
    await queryRunner.query(`DROP TABLE "cart_type"`)
    await queryRunner.query(`DROP INDEX "public"."cart_pkey"`)
    await queryRunner.query(`DROP TABLE "cart"`)
    await queryRunner.query(`DROP INDEX "public"."order_pkey"`)
    await queryRunner.query(`DROP TABLE "order"`)
    await queryRunner.query(`DROP INDEX "public"."cart-item_pkey"`)
    await queryRunner.query(`DROP TABLE "cart_item"`)
  }
}
