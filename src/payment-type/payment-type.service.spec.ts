import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PaymentType } from './entities/payment-type.entity'
import { PaymentTypeService } from './payment-type.service'

import {
  mockPaymentType,
  mockPaymentTypes,
  mockPaymentTypeRepository
} from './mockData'

describe('PaymentTypeService', () => {
  let service: PaymentTypeService
  let repo: Repository<PaymentType>

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
