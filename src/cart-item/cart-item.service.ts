import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'

import { CartItem } from './entities/cart-item.entity'

@Injectable()
export class CartItemService {
  logger: Logger

  constructor(
    @InjectRepository(CartItem) private cartItemRepository: Repository<CartItem>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createCartItemDto: CreateCartItemDto) {
    const retVal = this.cartItemRepository.create(createCartItemDto)

    this.logger.log(`CartService created a new CartItem: ${retVal.id}`)
    return this.cartItemRepository.save(retVal)
  }

  findAll() {
    return this.cartItemRepository.find()
  }

  findOneById(id: string) {
    return this.cartItemRepository.findOneById(id)
  }

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateCartItemDto.id
    retVal.cartId = updateCartItemDto.cartId
    retVal.productId = updateCartItemDto.productId
    retVal.productName = updateCartItemDto.productName
    retVal.productQuantity = updateCartItemDto.productQuantity
    retVal.productPrice = updateCartItemDto.productPrice
    retVal.lineItemTotalPrice = updateCartItemDto.lineItemTotalPrice

    this.logger.log(`CartItemService updates a cart item: ${id}`)

    return this.cartItemRepository.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`CartItemService deletes a cart item: ${id}`)

    return this.cartItemRepository.remove(toDelete)
  }
}
