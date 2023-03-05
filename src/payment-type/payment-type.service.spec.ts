import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreatePaymentTypeDto } from './dto/create-payment-type.dto'
import { PaymentType } from './entities/payment-type.entity'
import { PaymentTypeService } from './payment-type.service'

describe('PaymentTypeService', () => {
  let service: PaymentTypeService
  let repo: Repository<PaymentType>

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

  const mockPaymentTypeRepository = {
    create: jest.fn().mockResolvedValue(mockPaymentType),
    save: jest.fn().mockResolvedValue(mockPaymentType),
    find: jest.fn().mockResolvedValue(mockPaymentTypes),
    findAll: jest.fn().mockResolvedValue(mockPaymentTypes),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockPaymentType),
    update: jest.fn().mockResolvedValue({ ...mockPaymentType }),
    remove: jest.fn().mockResolvedValue(mockPaymentType)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentTypeService,
        {
          provide: getRepositoryToken(PaymentType),
          useValue: mockPaymentTypeRepository
        }
      ]
    }).compile()

    service = module.get<PaymentTypeService>(PaymentTypeService)
    repo = module.get<Repository<PaymentType>>(getRepositoryToken(PaymentType))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a payment type', () => {
    expect(service.create(mockPaymentType)).resolves.toEqual({
      id: '1',
      ...mockPaymentType
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockPaymentType })
    expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all payment types', () => {
    expect(service.findAll()).resolves.toEqual(mockPaymentTypes)
  })
  it('should find a payment type by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById(1)).resolves.toEqual(mockPaymentType)
    expect(repoSpy).toBeCalledWith(1)
  })
  it('should update an example', () => {
    expect(service.update(1, mockPaymentType)).resolves.toEqual({
      id: '1',
      ...mockPaymentType
    })
  })
  it('should delete an example', () => {
    expect(service.remove(1)).resolves.toEqual({
      ...mockPaymentType
    })
  })
})
