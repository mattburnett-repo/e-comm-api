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
    private repo: Repository<ProductCategory>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(
    createProductCategoryDto: CreateProductCategoryDto
  ): Promise<ProductCategory> {
    const retVal = this.repo.create(createProductCategoryDto)

    this.logger.log(
      `ProductCategoryService created a new ProductCategory: ${retVal.id}`
    )
    return this.repo.save(retVal)
  }

  findAll(): Promise<ProductCategory[]> {
    return this.repo.find()
  }

  findOneById(id: number): Promise<ProductCategory> {
    return this.repo.findOneById(id)
  }

  async update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    this.logger.log(`ProductCategoryService updates a ProductCategory: ${id}`)

    return this.repo.save(updateProductCategoryDto)
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ProductCategoryService deletes a ProductCategory: ${id}`)

    return this.repo.remove(toDelete)
  }
}
