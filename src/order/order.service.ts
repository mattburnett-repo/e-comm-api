import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

import { Order } from './entities/order.entity'

@Injectable()
export class OrderService {
  logger: Logger

  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createOrderDto: CreateOrderDto) {
    const retVal = this.orderRepository.create(createOrderDto)

    this.logger.log(`OrderService created a new Order: ${retVal.id}`)
    return this.orderRepository.save(retVal)
  }

  findAll() {
    return this.orderRepository.find()
  }

  findOneById(id: string) {
    return this.orderRepository.findOneById(id)
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateOrderDto.id
    retVal.orderDate = updateOrderDto.orderDate
    retVal.tax = updateOrderDto.tax
    retVal.totalPrice = updateOrderDto.totalPrice
    retVal.paymentId = updateOrderDto.paymentId

    this.logger.log(`OrderService updates an Order: ${id}`)

    return this.orderRepository.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`OrderService deletes an Order: ${id}`)

    return this.orderRepository.remove(toDelete)
  }
}
