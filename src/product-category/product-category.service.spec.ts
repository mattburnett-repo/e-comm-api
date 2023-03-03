import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ProductCategory } from './entities/product-category.entity'
import { ProductCategoryService } from './product-category.service'

import {
  mockProductCategory,
  mockProductCategories,
  mockProductCategoryRepository
} from './mockData'

describe('ProductCategoryService', () => {
  let service: ProductCategoryService
  let repo: Repository<ProductCategory>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductCategoryService,
        {
          provide: getRepositoryToken(ProductCategory),
          useValue: mockProductCategoryRepository
        }
      ]
    }).compile()

    service = module.get<ProductCategoryService>(ProductCategoryService)
    repo = module.get<Repository<ProductCategory>>(
      getRepositoryToken(ProductCategory)
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a product category', () => {
    expect(service.create(mockProductCategory)).resolves.toEqual({
      id: '1',
      ...mockProductCategory
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockProductCategory })
    expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all product categories', () => {
    expect(service.findAll()).resolves.toEqual(mockProductCategories)
  })

  it('should find a product category by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById(1)).resolves.toEqual(mockProductCategory)
    expect(repoSpy).toBeCalledWith(1)
  })

  it('should update an example', () => {
    expect(service.update(1, mockProductCategory)).resolves.toEqual({
      id: '1',
      ...mockProductCategory
    })
  })

  it('should delete an example', () => {
    expect(service.remove(1)).resolves.toEqual({
      ...mockProductCategory
    })
  })
})
