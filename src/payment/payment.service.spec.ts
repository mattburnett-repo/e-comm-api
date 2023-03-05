import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreatePaymentDto } from './dto/create-payment.dto'
import { Payment } from './entities/payment.entity'
import { PaymentService } from './payment.service'

describe('PaymentService', () => {
  let service: PaymentService
  let repo: Repository<Payment>

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

  const mockPaymentRepository = {
    create: jest.fn().mockResolvedValue(mockPayment),
    save: jest.fn().mockResolvedValue(mockPayment),
    find: jest.fn().mockResolvedValue(mockPayments),
    findAll: jest.fn().mockResolvedValue(mockPayments),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockPayment),
    update: jest.fn().mockResolvedValue({ ...mockPayment }),
    remove: jest.fn().mockResolvedValue(mockPayment)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentService,
        {
          provide: getRepositoryToken(Payment),
          useValue: mockPaymentRepository
        }
      ]
    }).compile()

    service = module.get<PaymentService>(PaymentService)
    repo = module.get<Repository<Payment>>(getRepositoryToken(Payment))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a payment', () => {
    expect(service.create(mockPayment)).resolves.toEqual({
      id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
      ...mockPayment
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockPayment })
    expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all payments', () => {
    expect(service.findAll()).resolves.toEqual(mockPayments)
  })
  it('should find a payment by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(
      service.findOneById('cfdd4196-bb02-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockPayment)
    expect(service.findOneById('a uuid')).resolves.toEqual(mockPayment)
    expect(repoSpy).toBeCalledWith('a uuid')
  })
  it('should update a payment', () => {
    expect(service.update('1', mockPayment)).resolves.toEqual({
      id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
      ...mockPayment
    })
  })
  it('should delete a payment', () => {
    expect(
      service.remove('cfdd4196-bb02-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockPayment
    })
  })
})
