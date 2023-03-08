import { Test, TestingModule } from '@nestjs/testing'

import { PaymentTypeController } from './payment-type.controller'
import { PaymentTypeService } from './payment-type.service'

import {
  mockPaymentType,
  mockPaymentTypes,
  mockPaymentTypeService
} from './mockData'

describe('PaymentTypeController', () => {
  let controller: PaymentTypeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentTypeController],
      providers: [PaymentTypeService]
    })
      .overrideProvider(PaymentTypeService)
      .useValue(mockPaymentTypeService)
      .compile()

    controller = module.get<PaymentTypeController>(PaymentTypeController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should create one', async () => {
    expect(controller.create(mockPaymentType)).resolves.toEqual({
      ...mockPaymentType
    })
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockPaymentTypes)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockPaymentType.id)).resolves.toEqual(
      mockPaymentType
    )
  })

  it('should update one', async () => {
    expect(controller.update(1, mockPaymentType)).resolves.toEqual({
      ...mockPaymentType
    })
  })
  it('should delete one', async () => {
    expect(controller.remove(1)).resolves.toEqual({
      ...mockPaymentType
    })
  })
})
