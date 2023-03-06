import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import { ProductCategory } from './entities/product-category.entity'
import { ProductCategoryService } from './product-category.service'

describe('ProductCategoryService', () => {
  let service: ProductCategoryService
  let repo: Repository<ProductCategory>

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

  const mockProductCategoryRepository = {
    create: jest.fn().mockResolvedValue(mockProductCategory),
    save: jest.fn().mockResolvedValue(mockProductCategory),
    find: jest.fn().mockResolvedValue(mockProductCategories),
    findAll: jest.fn().mockResolvedValue(mockProductCategories),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockProductCategory),
    update: jest.fn().mockResolvedValue({ ...mockProductCategory }),
    remove: jest.fn().mockResolvedValue(mockProductCategory)
  }
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
