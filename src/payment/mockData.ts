import { CreatePaymentDto } from './dto/create-payment.dto'

export const mockPayment: CreatePaymentDto = {
  id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
  stripeId: 'stripeId-test-value',
  created: 12345,
  paymentMethod: 'test payment method',
  transactionState: 'test transaction state',
  amount: 123.45
}

export const mockPayments: CreatePaymentDto[] = [
  {
    id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
    stripeId: 'stripeId-test-value',
    created: 12345,
    paymentMethod: 'test payment method',
    transactionState: 'test transaction state',
    amount: 123.45
  },
  {
    id: '6e9968e2-bb98-11ed-afa1-0242ac120002',
    userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
    stripeId: 'stripeId-test-value',
    created: 12345,
    paymentMethod: 'test payment method',
    transactionState: 'test transaction state',
    amount: 123.45
  }
]

export const mockPaymentRepository = {
  create: jest.fn().mockResolvedValue(mockPayment),
  save: jest.fn().mockResolvedValue(mockPayment),
  find: jest.fn().mockResolvedValue(mockPayments),
  findAll: jest.fn().mockResolvedValue(mockPayments),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockPayment),
  update: jest.fn().mockResolvedValue({ ...mockPayment }),
  remove: jest.fn().mockResolvedValue(mockPayment)
}

export const mockPaymentService = {
  create: jest.fn().mockResolvedValue(mockPayment),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockPayments),
  findOneById: jest.fn().mockResolvedValue(mockPayment),
  update: jest.fn().mockResolvedValue(mockPayment),
  delete: jest.fn().mockResolvedValue(mockPayment),
  remove: jest.fn().mockResolvedValue(mockPayment)
}

module.exports = {
  mockPayment: mockPayment,
  mockPayments: mockPayments,
  mockPaymentRepository: mockPaymentRepository,
  mockPaymentService: mockPaymentService
}
