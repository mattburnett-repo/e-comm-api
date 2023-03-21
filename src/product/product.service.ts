import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProductCategory } from '../product-category/entities/product-category.entity'

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
    const productCategory = new ProductCategory()
    productCategory.id = createProductDto.category_id

    const product = this.repo.create(createProductDto)
    product.category = [productCategory]

    this.logger.log(`ProductService created a new Product: ${product.id}`)

    return this.repo.save(product)
  }

  findAll(): Promise<Product[]> {
    return this.repo.find({
      relations: ['category'],
      select: {
        id: true,
        name: true,
        description: true,
        image_01_url: true,
        image_02_url: true,
        price: true,
        category: {
          id: true
        }
      }
    })
  }

  findOneById(id: string): Promise<Product> {
    return this.repo.findOne({
      where: { id: id },
      relations: ['category'],
      select: {
        id: true,
        name: true,
        description: true,
        image_01_url: true,
        image_02_url: true,
        price: true,
        category: {
          id: true
        }
      }
    })
  }

  findAllByCategoryId(id: number): Promise<Product[]> {
    return this.repo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .select([
        'product.id',
        'product.name',
        'product.description',
        'product.image_01_url',
        'product.image_02_url',
        'product.price',
        'category.id'
      ])
      .where('category.id = :id', { id })
      .getMany()
  }

  async findAllBySubCategoryCode(code: string): Promise<Product[]> {
    return this.repo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.subCategory', 'subCategory')
      .select([
        'product.id',
        'product.name',
        'product.description',
        'product.image_01_url',
        'product.image_02_url',
        'product.price',
        'subCategory.code'
      ])
      .where('subCategory.code = :code', { code })
      .getMany()
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    this.logger.log(`ExampleService updates a Product: ${id}`)

    const updated = await this.repo.save(updateProductDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ProductService deletes a Product: ${id}`)

    return this.repo.remove(toDelete)
  }
}
