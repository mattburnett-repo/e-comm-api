import { CreateOrderDto } from './dto/create-order.dto'

export const mockOrder: CreateOrderDto = {
  id: '1882376c-bafe-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  order_date: new Date(),
  tax: 1.23,
  total_price: 3.45,
  payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockOrders: CreateOrderDto[] = [
  {
    id: '1882376c-bafe-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    order_date: new Date(),
    tax: 1.23,
    total_price: 3.45,
    payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
  },
  {
    id: '5a1513a6-bb95-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    order_date: new Date(),
    tax: 4.56,
    total_price: 5.67,
    payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
  }
]

export const testOrderData = {
  id: '7050c680-c075-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  tax: 1.23,
  total_price: 4.56,
  payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockOrderRepository = {
  create: jest.fn().mockResolvedValue(mockOrder),
  save: jest.fn().mockResolvedValue(mockOrder),
  find: jest.fn().mockResolvedValue(mockOrders),
  findOne: jest.fn().mockResolvedValue(mockOrder),
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
  testOrderData: testOrderData,
  mockOrderRepository: mockOrderRepository,
  mockOrderService: mockOrderService
}
