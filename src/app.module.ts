import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ExampleModule } from './example/example.module'

import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { AddressModule } from './address/address.module'
import { CartItemModule } from './cart-item/cart-item.module'
import { CartModule } from './cart/cart.module'
import { OrderModule } from './order/order.module'
import { PaymentModule } from './payment/payment.module'
import { PaymentTypeModule } from './payment-type/payment-type.module'
import { ProductModule } from './product/product.module'
import { ProductCategoryModule } from './product-category/product-category.module'
import { SubCategoryModule } from './sub-category/sub-category.module'

import dbConfig from './config/dbConfig'

const ENV = process.env.NODE_ENV
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [dbConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('database')
    }),
    ExampleModule,
    UserModule,
    AuthModule,
    AddressModule,
    CartItemModule,
    CartModule,
    OrderModule,
    PaymentModule,
    PaymentTypeModule,
    ProductCategoryModule,
    ProductModule,
    SubCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
