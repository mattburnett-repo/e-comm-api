import { CreateSubCategoryDto } from './dto/create-sub-category.dto'

export const mockSubCategory: CreateSubCategoryDto = {
  id: 1,
  code: 'featured',
  description: 'Featured'
}

export const mockSubCategories: CreateSubCategoryDto[] = [
  {
    id: 1,
    code: 'featured',
    description: 'Featured'
  },
  {
    id: 2,
    code: 'trending',
    description: 'Trending'
  },
  {
    id: 3,
    code: 'sale',
    description: 'Sale'
  }
]

export const mockSubCategoryRepository = {
  create: jest.fn().mockResolvedValue(mockSubCategory),
  save: jest.fn().mockResolvedValue(mockSubCategory),
  find: jest.fn().mockResolvedValue(mockSubCategories),
  findAll: jest.fn().mockResolvedValue(mockSubCategories),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockSubCategory),
  update: jest.fn().mockResolvedValue({ ...mockSubCategory }),
  remove: jest.fn().mockResolvedValue(mockSubCategory)
}

export const mockSubCategoryService = {
  create: jest.fn().mockResolvedValue(mockSubCategory),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockSubCategories),
  findOneById: jest.fn().mockResolvedValue(mockSubCategory),
  update: jest.fn().mockResolvedValue(mockSubCategory),
  delete: jest.fn().mockResolvedValue(mockSubCategory),
  remove: jest.fn().mockResolvedValue(mockSubCategory)
}

module.exports = {
  mockSubCategory: mockSubCategory,
  mockSubCategories: mockSubCategories,
  mockSubCategoryRepository: mockSubCategoryRepository,
  mockSubCategoryService: mockSubCategoryService
}
