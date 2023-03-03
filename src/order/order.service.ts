import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cart } from '../cart/entities/cart.entity'

import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

import { Order } from './entities/order.entity'

@Injectable()
export class OrderService {
  logger: Logger

  constructor(@InjectRepository(Order) private repo: Repository<Order>) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const cart = new Cart()
    cart.id = createOrderDto.cart_id

    const order = this.repo.create(createOrderDto)
    order.cart = [cart]

    this.logger.log(`OrderService creates an Order: ${order.id}`)

    return this.repo.save(order)
  }

  findAll(): Promise<Order[]> {
    return this.repo.find({
      relations: ['cart', 'cart.cartItem'],
      select: {
        id: true,
        cart_id: true,
        user_id: true,
        order_date: true,
        tax: true,
        total_price: true,
        payment_id: true,
        cart: {
          id: true,
          name: true,
          description: true,
          cartItem: {
            id: true,
            product_id: true,
            productName: true,
            productQuantity: true,
            productPrice: true,
            lineItemTotalPrice: true
          }
        }
      }
    })
  }

  findOneById(id: string): Promise<Order> {
    return this.repo.findOne({
      where: {
        id: id
      },
      relations: ['cart', 'cart.cartItem'],
      select: {
        id: true,
        cart_id: true,
        user_id: true,
        order_date: true,
        tax: true,
        total_price: true,
        payment_id: true,
        cart: {
          id: true,
          name: true,
          description: true,
          cartItem: {
            id: true,
            product_id: true,
            productName: true,
            productQuantity: true,
            productPrice: true,
            lineItemTotalPrice: true
          }
        }
      }
    })
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    this.logger.log(`OrderService updates an Order: ${id}`)

    const updated = await this.repo.save(updateOrderDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`OrderService deletes an Order: ${id}`)

    return this.repo.remove(toDelete)
  }
}
