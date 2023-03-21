import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateSubCategoryDto } from './dto/create-sub-category.dto'
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto'

import { SubCategory } from './entities/sub-category.entity'

@Injectable()
export class SubCategoryService {
  logger: Logger

  constructor(
    @InjectRepository(SubCategory)
    private repo: Repository<SubCategory>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createSubCategoryDto: CreateSubCategoryDto): Promise<SubCategory> {
    const retVal = this.repo.create(createSubCategoryDto)

    this.logger.log(
      `SubCategoryService created a new SubCategory: ${retVal.id}`
    )
    return this.repo.save(retVal)
  }

  findAll(): Promise<SubCategory[]> {
    return this.repo.find()
  }

  findOneById(id: number): Promise<SubCategory> {
    return this.repo.findOneById(id)
  }

  async update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    this.logger.log(`SubCategoryService updates a SubCategory: ${id}`)

    return this.repo.save(updateSubCategoryDto)
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`SubategoryService deletes a SubCategory: ${id}`)

    return this.repo.remove(toDelete)
  }
}
