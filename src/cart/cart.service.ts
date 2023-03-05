import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'

import { Cart } from './entities/cart.entity'

@Injectable()
export class CartService {
  logger: Logger

  constructor(
    @InjectRepository(Cart) private cartRepository: Repository<Cart>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }
  create(createCartDto: CreateCartDto) {
    const retVal = this.cartRepository.create(createCartDto)

    this.logger.log(`ExampleService created a new Example: ${retVal.id}`)
    return this.cartRepository.save(retVal)
  }

  findAll() {
    return this.cartRepository.find()
  }

  findOneById(id: string) {
    return this.cartRepository.findOneById(id)
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    const cart = await this.findOneById(id)

    cart.id = updateCartDto.id
    cart.name = updateCartDto.name
    cart.description = updateCartDto.description

    this.logger.log(`CartService updates a cart: ${id}`)

    return this.cartRepository.save(cart)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`CartService deletes a cart: ${id}`)

    return this.cartRepository.remove(toDelete)
  }
}
