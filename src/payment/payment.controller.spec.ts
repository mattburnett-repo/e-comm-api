import { Test, TestingModule } from '@nestjs/testing'

import { PaymentController } from './payment.controller'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { PaymentService } from './payment.service'

describe('PaymentController', () => {
  let controller: PaymentController

  const mockPayment: CreatePaymentDto = {
    id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
    stripeId: 'stripeId-test-value',
    created: 12345,
    paymentMethod: 'test payment method',
    transactionState: 'test transaction state',
    amount: 123.45
  }

  const mockPayments: CreatePaymentDto[] = [
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

  const mockPaymentService = {
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService]
    })
      .overrideProvider(PaymentService)
      .useValue(mockPaymentService)
      .compile()

    controller = module.get<PaymentController>(PaymentController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should get all', async () => {
    expect(controller.create(mockPayment)).resolves.toEqual({
      ...mockPayment
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockPayment.id)).resolves.toEqual(mockPayment)
  })
  it('should update one', async () => {
    expect(
      controller.update('cfdd4196-bb02-11ed-afa1-0242ac120002', mockPayment)
    ).resolves.toEqual({
      ...mockPayment
    })
  })
  it('should delete one', async () => {
    expect(
      controller.remove('cfdd4196-bb02-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockPayment
    })
  })
})
