import { Test, TestingModule } from '@nestjs/testing'

import { ProductController } from './product.controller'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductService } from './product.service'

describe('ProductController', () => {
  let controller: ProductController

  const mockProduct: CreateProductDto = {
    id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
    name: 'Test Product One',
    description: 'Test Product One Description',
    imageUrl: 'https://example.com/image.png',
    price: 123.45
  }

  const mockProducts: CreateProductDto[] = [
    {
      id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
      name: 'Test Product One',
      description: 'Test Product One Description',
      imageUrl: 'https://example.com/image.png',
      price: 123.45
    },
    {
      id: 'd4b0b63a-bba2-11ed-afa1-0242ac120002',
      name: 'Test Product Two',
      description: 'Test Product Two Description',
      imageUrl: 'https://example.com/image.png',
      price: 678.91
    }
  ]

  const mockProductService = {
    create: jest.fn().mockResolvedValue(mockProduct),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockProducts),
    findOneById: jest.fn().mockResolvedValue(mockProduct),
    update: jest.fn().mockResolvedValue(mockProduct),
    delete: jest.fn().mockResolvedValue(mockProduct),
    remove: jest.fn().mockResolvedValue(mockProduct)
  }

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

  it('should get one by id', async () => {
    expect(controller.findOneById(mockProduct.id)).resolves.toEqual(mockProduct)
  })
  it('should add one', async () => {
    expect(controller.create(mockProduct)).resolves.toEqual({
      ...mockProduct
    })
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
