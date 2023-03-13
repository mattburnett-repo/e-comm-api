import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'

import { CartItem } from './entities/cart-item.entity'

@Injectable()
export class CartItemService {
  logger: Logger

  constructor(@InjectRepository(CartItem) private repo: Repository<CartItem>) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createCartItemDto: CreateCartItemDto): Promise<CartItem> {
    const retVal = this.repo.create(createCartItemDto)

    this.logger.log(`CartService created a new CartItem: ${retVal.id}`)
    return this.repo.save(createCartItemDto)
  }

  findAll(): Promise<CartItem[]> {
    return this.repo
      .createQueryBuilder('cart-item')
      .leftJoinAndSelect('cart-item.cart', 'cart')
      .select([
        'cart-item.id',
        'cart-item.cart_id',
        'cart-item.product_id',
        'cart-item.productName',
        'cart-item.productQuantity',
        'cart-item.productPrice',
        'cart-item.lineItemTotalPrice',
        'cart.id'
      ])
      .getMany()
  }

  findOneById(id: string): Promise<CartItem> {
    return this.repo
      .createQueryBuilder('cart-item')
      .leftJoinAndSelect('cart-item.cart', 'cart')
      .select([
        'cart-item.id',
        'cart-item.cart_id',
        'cart-item.product_id',
        'cart-item.productName',
        'cart-item.productQuantity',
        'cart-item.productPrice',
        'cart-item.lineItemTotalPrice',
        'cart.id'
      ])
      .where('cart-item.id = :id', { id })
      .getOne()
  }

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    this.logger.log(`CartItemService updates a cart item: ${id}`)

    const updated = await this.repo.save(updateCartItemDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`CartItemService deletes a cart item: ${id}`)

    return this.repo.remove(toDelete)
  }
}
