import { CreateProductCategoryDto } from './dto/create-product-category.dto'

export const mockProductCategory: CreateProductCategoryDto = {
  id: 1,
  name: 'Test Product Category One Name',
  description: 'Test Product Category One Description'
}

export const mockProductCategories: CreateProductCategoryDto[] = [
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

export const mockProductCategoryRepository = {
  create: jest.fn().mockResolvedValue(mockProductCategory),
  save: jest.fn().mockResolvedValue(mockProductCategory),
  find: jest.fn().mockResolvedValue(mockProductCategories),
  findAll: jest.fn().mockResolvedValue(mockProductCategories),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockProductCategory),
  update: jest.fn().mockResolvedValue({ ...mockProductCategory }),
  remove: jest.fn().mockResolvedValue(mockProductCategory)
}

export const mockProductCategoryService = {
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

module.exports = {
  mockProductCategory: mockProductCategory,
  mockProductCategories: mockProductCategories,
  mockProductCategoryRepository: mockProductCategoryRepository,
  mockProductCategoryService: mockProductCategoryService
}
