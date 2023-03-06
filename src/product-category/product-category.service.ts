import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import { UpdateProductCategoryDto } from './dto/update-product-category.dto'

import { ProductCategory } from './entities/product-category.entity'

@Injectable()
export class ProductCategoryService {
  logger: Logger

  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createProductCategoryDto: CreateProductCategoryDto) {
    const retVal = this.productCategoryRepository.create(
      createProductCategoryDto
    )

    this.logger.log(
      `ProductCategoryService created a new ProductCategory: ${retVal.id}`
    )
    return this.productCategoryRepository.save(retVal)
  }

  findAll() {
    return this.productCategoryRepository.find()
  }

  findOneById(id: number) {
    return this.productCategoryRepository.findOneById(id)
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    const example = await this.findOneById(id)

    example.id = updateProductCategoryDto.id

    this.logger.log(`ProductCategoryService updates a ProductCategory: ${id}`)

    return this.productCategoryRepository.save(example)
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ProductCategoryService deletes a ProductCategory: ${id}`)

    return this.productCategoryRepository.remove(toDelete)
  }
}
