import { Test, TestingModule } from '@nestjs/testing'

import { ProductCategoryController } from './product-category.controller'
import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import { ProductCategoryService } from './product-category.service'

describe('ProductCategoryController', () => {
  let controller: ProductCategoryController

  const mockProductCategory: CreateProductCategoryDto = {
    id: 1,
    name: 'Test Product Category One Name',
    description: 'Test Product Category One Description'
  }

  const mockProductCategories: CreateProductCategoryDto[] = [
    {
      id: 1,
      name: 'Test Product Category One Name',
      description: 'Test Product Category One Description'
    },
    {
      id: 2,
      name: 'Test Product Category Two Name',
      description: 'Test Product Category Two Description'
    }
  ]

  const mockProductCategoryService = {
    create: jest.fn().mockResolvedValue(mockProductCategory),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockProductCategories),
    findOneById: jest.fn().mockResolvedValue(mockProductCategory),
    update: jest.fn().mockResolvedValue(mockProductCategory),
    delete: jest.fn().mockResolvedValue(mockProductCategory),
    remove: jest.fn().mockResolvedValue(mockProductCategory)
  }

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

  it('should get all', async () => {
    expect(controller.create(mockProductCategory)).resolves.toEqual({
      ...mockProductCategory
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockProductCategory.id)).resolves.toEqual(
      mockProductCategory
    )
  })
  it('should add one', async () => {
    expect(controller.create(mockProductCategory)).resolves.toEqual({
      ...mockProductCategory
    })
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
