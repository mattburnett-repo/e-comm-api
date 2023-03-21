import { Test, TestingModule } from '@nestjs/testing'

import { SubCategoryController } from './sub-category.controller'
import { SubCategoryService } from './sub-category.service'

import {
  mockSubCategory,
  mockSubCategories,
  mockSubCategoryService
} from './mockData'

describe('SubCategoryController', () => {
  let controller: SubCategoryController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoryController],
      providers: [SubCategoryService]
    })
      .overrideProvider(SubCategoryService)
      .useValue(mockSubCategoryService)
      .compile()

    controller = module.get<SubCategoryController>(SubCategoryController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should create one', async () => {
    expect(controller.create(mockSubCategory)).resolves.toEqual({
      ...mockSubCategory
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockSubCategory.id)).resolves.toEqual(
      mockSubCategory
    )
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockSubCategories)
  })

  it('should update one', async () => {
    expect(controller.update(1, mockSubCategory)).resolves.toEqual({
      ...mockSubCategory
    })
  })
  it('should delete one', async () => {
    expect(controller.remove(1)).resolves.toEqual({
      ...mockSubCategory
    })
  })
})
