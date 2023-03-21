import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'

import { SubCategory } from './entities/sub-category.entity'
import { SubCategoryService } from './sub-category.service'

import {
  mockSubCategory,
  mockSubCategories,
  mockSubCategoryRepository
} from './mockData'

describe('SubCategoryService', () => {
  let service: SubCategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubCategoryService,
        {
          provide: getRepositoryToken(SubCategory),
          useValue: mockSubCategoryRepository
        }
      ]
    }).compile()

    service = module.get<SubCategoryService>(SubCategoryService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })

  it('should create a sub category', () => {
    expect(service.create(mockSubCategory)).resolves.toEqual({
      id: '1',
      ...mockSubCategory
    })
  })

  it('should find all sub categories', () => {
    expect(service.findAll()).resolves.toEqual(mockSubCategories)
  })
  it('should find a sub category by id', () => {
    expect(service.findOneById(1)).resolves.toEqual(mockSubCategory)
  })

  it('should update a sub category', () => {
    expect(service.update(1, mockSubCategory)).resolves.toEqual({
      id: '1',
      ...mockSubCategory
    })
  })
  it('should delete a sub category', () => {
    expect(service.remove(1)).resolves.toEqual({
      ...mockSubCategory
    })
  })
})
