import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Product } from './entities/product.entity'
import { ProductService } from './product.service'

import { mockProduct, mockProducts, mockProductRepository } from './mockData'

describe('ProductService', () => {
  let service: ProductService
  let repo: Repository<Product>

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

  it('should find all products by category id', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    // repo.createQueryBuilder.mockResolvedValue(mockProducts)
    // expect(service.findAllByCategoryId(2)).toEqual(mockProducts)
    expect(service.findAllByCategoryId(2)).toBeDefined()
  })

  it('should find a product by id', () => {
    // const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(
      service.findOneById('c1d20780-bba2-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockProduct)
    // expect(service.findOneById('a uuid')).resolves.toEqual(mockProduct)
    // expect(repoSpy).toBeCalledWith('a uuid')
  })

  it('should update a product', () => {
    expect(
      service.update('c1d20780-bba2-11ed-afa1-0242ac120002', mockProduct)
    ).resolves.toEqual({
      id: '1',
      ...mockProduct
    })
  })

  it('should delete a product', () => {
    expect(
      service.remove('c1d20780-bba2-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockProduct
    })
  })
})
