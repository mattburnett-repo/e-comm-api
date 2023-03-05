import { Test, TestingModule } from '@nestjs/testing'

import { PaymentTypeController } from './payment-type.controller'
import { CreatePaymentTypeDto } from './dto/create-payment-type.dto'
import { PaymentTypeService } from './payment-type.service'

describe('PaymentTypeController', () => {
  let controller: PaymentTypeController

  const mockPaymentType: CreatePaymentTypeDto = {
    id: 1,
    name: 'paypal',
    description: 'PayPal'
  }

  const mockPaymentTypes: CreatePaymentTypeDto[] = [
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

  const mockPaymentTypeService = {
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

  it('should get all', async () => {
    expect(controller.create(mockPaymentType)).resolves.toEqual({
      ...mockPaymentType
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockPaymentType.id)).resolves.toEqual(
      mockPaymentType
    )
  })
  it('should add one', async () => {
    expect(controller.create(mockPaymentType)).resolves.toEqual({
      ...mockPaymentType
    })
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
