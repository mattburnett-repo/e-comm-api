import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartTypeDto } from './dto/create-cart-type.dto'
import { UpdateCartTypeDto } from './dto/update-cart-type.dto'

import { CartType } from './entities/cart-type.entity'

@Injectable()
export class CartTypeService {
  logger: Logger

  constructor(
    @InjectRepository(CartType) private cartTypeRepository: Repository<CartType>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createCartTypeDto: CreateCartTypeDto): Promise<CartType> {
    const retVal = this.cartTypeRepository.create(createCartTypeDto)

    this.logger.log(`ExampleService created a new Example: ${retVal.id}`)
    return this.cartTypeRepository.save(retVal)
  }

  findAll(): Promise<CartType[]> {
    return this.cartTypeRepository.find()
  }

  findOneById(id: number): Promise<CartType> {
    return this.cartTypeRepository.findOneById(id)
  }

  async update(id: number, updateCartTypeDto: UpdateCartTypeDto) {
    const cartType = await this.findOneById(id)

    cartType.id = updateCartTypeDto.id
    cartType.name = updateCartTypeDto.name
    cartType.description = updateCartTypeDto.description

    this.logger.log(`CartTypeService updates a CartType: ${id}`)

    return this.cartTypeRepository.save(cartType)
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`CartTypeService deletes a CartType: ${id}`)

    return this.cartTypeRepository.remove(toDelete)
  }
}
