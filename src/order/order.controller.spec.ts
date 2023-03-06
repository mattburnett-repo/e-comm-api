import { Test, TestingModule } from '@nestjs/testing'

import { OrderController } from './order.controller'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderService } from './order.service'

describe('OrderController', () => {
  let controller: OrderController

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

  const mockOrderService = {
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
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService]
    })
      .overrideProvider(OrderService)
      .useValue(mockOrderService)
      .compile()

    controller = module.get<OrderController>(OrderController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should get all', async () => {
    expect(controller.create(mockOrder)).resolves.toEqual({
      ...mockOrder
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockOrder.id)).resolves.toEqual(mockOrder)
  })
  it('should add one', async () => {
    expect(controller.create(mockOrder)).resolves.toEqual({
      ...mockOrder
    })
  })
  it('should update one', async () => {
    expect(controller.update('1', mockOrder)).resolves.toEqual({
      ...mockOrder
    })
  })
  it('should delete one', async () => {
    expect(
      controller.remove('1882376c-bafe-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockOrder
    })
  })
})
