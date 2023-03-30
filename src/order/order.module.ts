import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Order } from './entities/order.entity'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { ProductService } from '../product/product.service'

import { Product } from '../product/entities/product.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product])],
  controllers: [OrderController],
  providers: [OrderService, ProductService],
  exports: [OrderService]
})
// eslint-disable-next-line prettier/prettier
export class OrderModule { }
