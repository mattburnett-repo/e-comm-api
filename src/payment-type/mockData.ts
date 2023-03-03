import { CreatePaymentTypeDto } from './dto/create-payment-type.dto'

export const mockPaymentType: CreatePaymentTypeDto = {
  id: 1,
  name: 'paypal',
  description: 'PayPal'
}

export const mockPaymentTypes: CreatePaymentTypeDto[] = [
  {
    id: 1,
    name: 'paypal',
    description: 'PayPal'
  },
  {
    id: 2,
    name: 'masterCard',
    description: 'MasterCard'
  }
]

export const mockPaymentTypeRepository = {
  create: jest.fn().mockResolvedValue(mockPaymentType),
  save: jest.fn().mockResolvedValue(mockPaymentType),
  find: jest.fn().mockResolvedValue(mockPaymentTypes),
  findAll: jest.fn().mockResolvedValue(mockPaymentTypes),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockPaymentType),
  update: jest.fn().mockResolvedValue({ ...mockPaymentType }),
  remove: jest.fn().mockResolvedValue(mockPaymentType)
}

export const mockPaymentTypeService = {
  create: jest.fn().mockResolvedValue(mockPaymentType),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockPaymentTypes),
  findOneById: jest.fn().mockResolvedValue(mockPaymentType),
  update: jest.fn().mockResolvedValue(mockPaymentType),
  delete: jest.fn().mockResolvedValue(mockPaymentType),
  remove: jest.fn().mockResolvedValue(mockPaymentType)
}

module.exports = {
  mockPaymentType: mockPaymentType,
  mockPaymentTypes: mockPaymentTypes,
  mockPaymentTypeRepository: mockPaymentTypeRepository,
  mockPaymentTypeService: mockPaymentTypeService
}
