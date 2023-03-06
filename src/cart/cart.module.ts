import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Cart } from './entities/cart.entity'
import { CartService } from './cart.service'
import { CartController } from './cart.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService]
})
// eslint-disable-next-line prettier/prettier
export class CartModule { }
