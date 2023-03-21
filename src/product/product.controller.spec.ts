import { Test, TestingModule } from '@nestjs/testing'

import { ProductController } from './product.controller'
import { ProductService } from './product.service'

import { mockProduct, mockProducts, mockProductService } from './mockData'

describe('ProductController', () => {
  let controller: ProductController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService]
    })
      .overrideProvider(ProductService)
      .useValue(mockProductService)
      .compile()

    controller = module.get<ProductController>(ProductController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should add one', async () => {
    expect(controller.create(mockProduct)).resolves.toEqual({
      ...mockProduct
    })
  })
  it('should find all', () => {
    expect(controller.findAll()).resolves.toEqual(mockProducts)
  })
  it('should find all by category id', () => {
    expect(controller.findAllByCategoryId(2)).resolves.toEqual(mockProducts)
  })
  it('should find all by sub-category code', () => {
    expect(controller.findAllBySubCategoryCode('trending')).resolves.toEqual(
      mockProducts
    )
  })

  it('should get one by id', async () => {
    expect(controller.findOneById(mockProduct.id)).resolves.toEqual(mockProduct)
  })
  it('should update one', async () => {
    expect(controller.update('1', mockProduct)).resolves.toEqual({
      ...mockProduct
    })
  })
  it('should delete one', async () => {
    expect(controller.remove('1')).resolves.toEqual({
      ...mockProduct
    })
  })
})
