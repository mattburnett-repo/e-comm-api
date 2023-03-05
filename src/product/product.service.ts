import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

import { Product } from './entities/product.entity'
@Injectable()
export class ProductService {
  logger: Logger

  constructor(
    @InjectRepository(Product) private exampleRepository: Repository<Product>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createProductDto: CreateProductDto) {
    const retVal = this.exampleRepository.create(createProductDto)

    this.logger.log(`ProductService created a new Product: ${retVal.id}`)
    return this.exampleRepository.save(retVal)
  }

  findAll() {
    return this.exampleRepository.find()
  }

  findOneById(id: string) {
    return this.exampleRepository.findOneById(id)
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateProductDto.id

    this.logger.log(`ExampleService updates a Product: ${id}`)

    return this.exampleRepository.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ProductService deletes a Product: ${id}`)

    return this.exampleRepository.remove(toDelete)
  }
}
