import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CartType } from './entities/cart-type.entity'
import { CartTypeService } from './cart-type.service'
import { CartTypeController } from './cart-type.controller'

@Module({
  imports: [TypeOrmModule.forFeature([CartType])],
  controllers: [CartTypeController],
  providers: [CartTypeService],
  exports: [CartTypeService]
})
// eslint-disable-next-line prettier/prettier
export class CartTypeModule { }
