import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './entities/product.entity'
import { ProductService } from './product.service'

describe('ProductService', () => {
  let service: ProductService
  let repo: Repository<Product>

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

  const mockProductRepository = {
    create: jest.fn().mockResolvedValue(mockProduct),
    save: jest.fn().mockResolvedValue(mockProduct),
    find: jest.fn().mockResolvedValue(mockProducts),
    findAll: jest.fn().mockResolvedValue(mockProducts),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockProduct),
    update: jest.fn().mockResolvedValue({ ...mockProduct }),
    remove: jest.fn().mockResolvedValue(mockProduct)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository
        }
      ]
    }).compile()

    service = module.get<ProductService>(ProductService)
    repo = module.get<Repository<Product>>(getRepositoryToken(Product))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a product', () => {
    expect(service.create(mockProduct)).resolves.toEqual({
      id: '1',
      ...mockProduct
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockProduct })
    expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all products', () => {
    expect(service.findAll()).resolves.toEqual(mockProducts)
  })

  it('should find a product by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(
      service.findOneById('c1d20780-bba2-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockProduct)
    expect(service.findOneById('a uuid')).resolves.toEqual(mockProduct)
    expect(repoSpy).toBeCalledWith('a uuid')
  })

  it('should update an example', () => {
    expect(
      service.update('c1d20780-bba2-11ed-afa1-0242ac120002', mockProduct)
    ).resolves.toEqual({
      id: '1',
      ...mockProduct
    })
  })

  it('should delete an example', () => {
    expect(
      service.remove('c1d20780-bba2-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockProduct
    })
  })
})
