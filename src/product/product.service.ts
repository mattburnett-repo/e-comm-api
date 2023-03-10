import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

import { Product } from './entities/product.entity'
@Injectable()
export class ProductService {
  logger: Logger

  constructor(@InjectRepository(Product) private repo: Repository<Product>) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const retVal = this.repo.create(createProductDto)

    this.logger.log(`ProductService created a new Product: ${retVal.id}`)
    return this.repo.save(retVal)
  }

  findAll(): Promise<Product[]> {
    return this.repo.find()
  }

  findOneById(id: string): Promise<Product> {
    return this.repo.findOneById(id)
  }

  findAllByCategoryId(id: number): Promise<Product[]> {
    return this.repo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .select([
        'product.id',
        'product.name',
        'product.description',
        'product.imageUrl',
        'product.price',
        'category.id'
      ])
      .where('category.id = :id', { id })
      .getMany()
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateProductDto.id

    this.logger.log(`ExampleService updates a Product: ${id}`)

    return this.repo.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ProductService deletes a Product: ${id}`)

    return this.repo.remove(toDelete)
  }
}
