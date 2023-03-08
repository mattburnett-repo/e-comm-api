import { CreateCartTypeDto } from './dto/create-cart-type.dto'

export const mockCartType: CreateCartTypeDto = {
  id: 1,
  name: 'User',
  description: 'Typical user cart'
}

export const mockCartTypes: CreateCartTypeDto[] = [
  {
    id: 1,
    name: 'User',
    description: 'Typical user cart'
  },
  {
    id: 2,
    name: 'Gift',
    description: 'Gift cart'
  }
]

export const mockCartTypeRepository = {
  create: jest.fn().mockResolvedValue(mockCartType),
  save: jest.fn().mockResolvedValue(mockCartType),
  find: jest.fn().mockResolvedValue(mockCartTypes),
  findAll: jest.fn().mockResolvedValue(mockCartTypes),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockCartType),
  update: jest.fn().mockResolvedValue(mockCartType),
  remove: jest.fn().mockResolvedValue(mockCartType)
}

export const mockCartTypeService = {
  create: jest.fn().mockResolvedValue(mockCartType),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockCartTypes),
  findOneById: jest.fn().mockResolvedValue(mockCartType),
  update: jest.fn().mockResolvedValue(mockCartType),
  delete: jest.fn().mockResolvedValue(mockCartType),
  remove: jest.fn().mockResolvedValue(mockCartType)
}

module.exports = {
  mockCartType: mockCartType,
  mockCartTypes: mockCartTypes,
  mockCartTypeRepository: mockCartTypeRepository,
  mockCartTypeService: mockCartTypeService
}
