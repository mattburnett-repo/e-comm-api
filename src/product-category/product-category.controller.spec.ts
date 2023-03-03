import { Test, TestingModule } from '@nestjs/testing'

import { ProductCategoryController } from './product-category.controller'
import { ProductCategoryService } from './product-category.service'

import {
  mockProductCategory,
  mockProductCategories,
  mockProductCategoryService
} from './mockData'

describe('ProductCategoryController', () => {
  let controller: ProductCategoryController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCategoryController],
      providers: [ProductCategoryService]
    })
      .overrideProvider(ProductCategoryService)
      .useValue(mockProductCategoryService)
      .compile()

    controller = module.get<ProductCategoryController>(
      ProductCategoryController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should create one', async () => {
    expect(controller.create(mockProductCategory)).resolves.toEqual({
      ...mockProductCategory
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockProductCategory.id)).resolves.toEqual(
      mockProductCategory
    )
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockProductCategories)
  })
  it('should update one', async () => {
    expect(controller.update(1, mockProductCategory)).resolves.toEqual({
      ...mockProductCategory
    })
  })
  it('should delete one', async () => {
    expect(controller.remove(1)).resolves.toEqual({
      ...mockProductCategory
    })
  })
})
