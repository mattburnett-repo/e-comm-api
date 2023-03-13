import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'

import { Cart } from './entities/cart.entity'

@Injectable()
export class CartService {
  logger: Logger

  constructor(@InjectRepository(Cart) private cart: Repository<Cart>) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }
  async create(createCartDto: CreateCartDto): Promise<Cart> {
    // console.log('cart service dto: ', createCartDto)

    this.logger.log(`ExampleService created a new Example: ${createCartDto.id}`)

    return this.cart.save(createCartDto)
  }

  findAll(): Promise<Cart[]> {
    return this.cart
      .createQueryBuilder('cart')
      .leftJoinAndSelect('cart.cartItem', 'cartItem')
      .select([
        'cart.id',
        'cart.user_id',
        'cart.name',
        'cart.description',
        'cartItem.id',
        'cartItem.cart_id',
        'cartItem.product_id',
        'cartItem.productName',
        'cartItem.productQuantity',
        'cartItem.productPrice',
        'cartItem.lineItemTotalPrice'
      ])
      .getMany()
  }

  findOneById(id: string): Promise<Cart> {
    return this.cart.findOne({
      where: {
        id: id
      },
      relations: ['cartItem'],
      select: {
        id: true,
        user_id: true,
        name: true,
        description: true,
        cartItem: {
          id: true,
          cart_id: true,
          product_id: true,
          productName: true,
          productQuantity: true,
          productPrice: true,
          lineItemTotalPrice: true
        }
      }
    })
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    this.logger.log(`CartService updates a Cart: ${id}`)

    const updated = await this.cart.save(updateCartDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`CartService deletes a cart: ${id}`)

    return this.cart.remove(toDelete)
  }
}
