import { CreateOrderDto } from './dto/create-order.dto'

export const mockOrder: CreateOrderDto = {
  id: '1882376c-bafe-11ed-afa1-0242ac120002',
  orderDate: new Date(),
  tax: 1.23,
  totalPrice: 3.45,
  paymentId: 12345
}

export const mockOrders: CreateOrderDto[] = [
  {
    id: '1882376c-bafe-11ed-afa1-0242ac120002',
    orderDate: new Date(),
    tax: 1.23,
    totalPrice: 3.45,
    paymentId: 12345
  },
  {
    id: '5a1513a6-bb95-11ed-afa1-0242ac120002',
    orderDate: new Date(),
    tax: 4.56,
    totalPrice: 5.67,
    paymentId: 67891
  }
]

export const mockOrderRepository = {
  create: jest.fn().mockResolvedValue(mockOrder),
  save: jest.fn().mockResolvedValue(mockOrder),
  find: jest.fn().mockResolvedValue(mockOrders),
  findAll: jest.fn().mockResolvedValue(mockOrders),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockOrder),
  update: jest.fn().mockResolvedValue({ ...mockOrder }),
  remove: jest.fn().mockResolvedValue(mockOrder)
}

export const mockOrderService = {
  create: jest.fn().mockResolvedValue(mockOrder),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockOrders),
  findOneById: jest.fn().mockResolvedValue(mockOrder),
  update: jest.fn().mockResolvedValue(mockOrder),
  delete: jest.fn().mockResolvedValue(mockOrder),
  remove: jest.fn().mockResolvedValue(mockOrder)
}

module.exports = {
  mockOrder: mockOrder,
  mockOrders: mockOrders,
  mockOrderRepository: mockOrderRepository,
  mockOrderService: mockOrderService
}
