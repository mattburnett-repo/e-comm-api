import { Test, TestingModule } from '@nestjs/testing'

import { PaymentController } from './payment.controller'
import { PaymentService } from './payment.service'

import { mockPayment, mockPayments, mockPaymentService } from './mockData'

describe('PaymentController', () => {
  let controller: PaymentController

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

  it('should create one', async () => {
    expect(controller.create(mockPayment)).resolves.toEqual({
      ...mockPayment
    })
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockPayments)
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
