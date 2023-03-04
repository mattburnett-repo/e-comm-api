import { MigrationInterface, QueryRunner } from "typeorm";

export class createEcomTables1677961516140 implements MigrationInterface {
    name = 'createEcomTables1677961516140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cart_id" uuid NOT NULL, "product_id" character varying NOT NULL, "product_name" character varying NOT NULL, "product_quantity" integer NOT NULL, "product_price" numeric(6,2) NOT NULL, "line_item_total_price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0d25676d0e5dcdcc66c978e631e" PRIMARY KEY ("id", "cart_id", "product_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "cart-item_pkey" ON "cart_item" ("cart_id") `);
        await queryRunner.query(`CREATE TABLE "cart_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5e2fe672eea8e068056fce87256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "cart-type_pkey" ON "cart_type" ("id") `);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150), "description" character varying(150), "order_date" date DEFAULT ('now'::text)::date, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "cart_pkey" ON "cart" ("id") `);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order_date" date DEFAULT ('now'::text)::date, "tax" numeric(6,2), "total_price" numeric(6,2), "payment_id" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "cart_id" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "order_pkey" ON "order" ("id") `);
        await queryRunner.query(`CREATE TABLE "payment_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f301e328eaf2127773c889ab94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "payment_type_pkey" ON "payment_type" ("id") `);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "stripe_id" character varying(100), "created" integer, "payment_method" character varying(100), "receipt_url" character varying(200), "transaction_status" character varying(50), "amount" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "payment_type_id" uuid, CONSTRAINT "REL_045d4c3aa6a3051cc2b586cc2d" UNIQUE ("payment_type_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "payment_pkey" ON "payment" ("id") `);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100), "last_name" character varying(100), "address_1" character varying(100) NOT NULL, "address_2" character varying(100), "city" character varying(100) NOT NULL, "state_province" character varying(100) NOT NULL, "postal_code" character varying(20) NOT NULL, "country" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "address_pkey" ON "address" ("id") `);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "image_url" character varying(250), "price" numeric(6,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "product_pkey" ON "product" ("id") `);
        await queryRunner.query(`CREATE TABLE "product_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "product-category_pkey" ON "product_category" ("id") `);
        await queryRunner.query(`CREATE TABLE "cart_cart_type" ("cart_id" uuid NOT NULL, "cart_type_id" uuid NOT NULL, CONSTRAINT "PK_6fb2200a90ea5dcffd04be96152" PRIMARY KEY ("cart_id", "cart_type_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_66e3005916835a3475270d4bcf" ON "cart_cart_type" ("cart_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_808f671e51da0e7e5608dc76d9" ON "cart_cart_type" ("cart_type_id") `);
        await queryRunner.query(`CREATE TABLE "product_product_category" ("product_id" uuid NOT NULL, "product_category_id" uuid NOT NULL, CONSTRAINT "PK_75a4ebdf54e893a0f12c4286f18" PRIMARY KEY ("product_id", "product_category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7273f54c7b24fa0968847cd813" ON "product_product_category" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_88d0a3fddb81d64b2f1fad3359" ON "product_product_category" ("product_category_id") `);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_f091e86a234693a49084b4c2c86" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c99a206eb11ad45f6b7f04f2dcc" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7" FOREIGN KEY ("payment_type_id") REFERENCES "payment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_cart_type" ADD CONSTRAINT "FK_66e3005916835a3475270d4bcf2" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_cart_type" ADD CONSTRAINT "FK_808f671e51da0e7e5608dc76d9f" FOREIGN KEY ("cart_type_id") REFERENCES "cart_type"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_7273f54c7b24fa0968847cd813f" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_product_category" ADD CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593" FOREIGN KEY ("product_category_id") REFERENCES "product_category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_88d0a3fddb81d64b2f1fad33593"`);
        await queryRunner.query(`ALTER TABLE "product_product_category" DROP CONSTRAINT "FK_7273f54c7b24fa0968847cd813f"`);
        await queryRunner.query(`ALTER TABLE "cart_cart_type" DROP CONSTRAINT "FK_808f671e51da0e7e5608dc76d9f"`);
        await queryRunner.query(`ALTER TABLE "cart_cart_type" DROP CONSTRAINT "FK_66e3005916835a3475270d4bcf2"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_c66c60a17b56ec882fcd8ec770b"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_045d4c3aa6a3051cc2b586cc2d7"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c99a206eb11ad45f6b7f04f2dcc"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_199e32a02ddc0f47cd93181d8fd"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_f091e86a234693a49084b4c2c86"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_b6b2a4f1f533d89d218e70db941"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88d0a3fddb81d64b2f1fad3359"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7273f54c7b24fa0968847cd813"`);
        await queryRunner.query(`DROP TABLE "product_product_category"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_808f671e51da0e7e5608dc76d9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_66e3005916835a3475270d4bcf"`);
        await queryRunner.query(`DROP TABLE "cart_cart_type"`);
        await queryRunner.query(`DROP INDEX "public"."product-category_pkey"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
        await queryRunner.query(`DROP INDEX "public"."product_pkey"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP INDEX "public"."address_pkey"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP INDEX "public"."payment_pkey"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP INDEX "public"."payment_type_pkey"`);
        await queryRunner.query(`DROP TABLE "payment_type"`);
        await queryRunner.query(`DROP INDEX "public"."order_pkey"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP INDEX "public"."cart_pkey"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP INDEX "public"."cart-type_pkey"`);
        await queryRunner.query(`DROP TABLE "cart_type"`);
        await queryRunner.query(`DROP INDEX "public"."cart-item_pkey"`);
        await queryRunner.query(`DROP TABLE "cart_item"`);
    }

}
