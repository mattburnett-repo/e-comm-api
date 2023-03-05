import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateOrderDto } from './dto/create-order.dto'
import { Order } from './entities/order.entity'
import { OrderService } from './order.service'

describe('OrderService', () => {
  let service: OrderService
  let repo: Repository<Order>

  const mockOrder: CreateOrderDto = {
    id: '1882376c-bafe-11ed-afa1-0242ac120002',
    orderDate: new Date(),
    tax: 1.23,
    totalPrice: 3.45,
    paymentId: 12345
  }
  const mockOrders: CreateOrderDto[] = [
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

  const mockOrderRepository = {
    create: jest.fn().mockResolvedValue(mockOrder),
    save: jest.fn().mockResolvedValue(mockOrder),
    find: jest.fn().mockResolvedValue(mockOrders),
    findAll: jest.fn().mockResolvedValue(mockOrders),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockOrder),
    update: jest.fn().mockResolvedValue({ ...mockOrder }),
    remove: jest.fn().mockResolvedValue(mockOrder)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: getRepositoryToken(Order),
          useValue: mockOrderRepository
        }
      ]
    }).compile()

    service = module.get<OrderService>(OrderService)
    repo = module.get<Repository<Order>>(getRepositoryToken(Order))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })

  it('should create an order', () => {
    expect(service.create(mockOrder)).resolves.toEqual({
      id: '1882376c-bafe-11ed-afa1-0242ac120002',
      ...mockOrder
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockOrder })
    expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all orders', () => {
    expect(service.findAll()).resolves.toEqual(mockOrders)
  })
  it('should find an order by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(
      service.findOneById('1882376c-bafe-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockOrder)
    expect(
      service.findOneById('1882376c-bafe-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockOrder)
    expect(repoSpy).toBeCalledWith('1882376c-bafe-11ed-afa1-0242ac120002')
  })
  it('should update an example', () => {
    expect(
      service.update('1882376c-bafe-11ed-afa1-0242ac120002', mockOrder)
    ).resolves.toEqual({
      id: '1882376c-bafe-11ed-afa1-0242ac120002',
      ...mockOrder
    })
  })
  it('should delete an order', () => {
    expect(
      service.remove('1882376c-bafe-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockOrder
    })
  })
})
