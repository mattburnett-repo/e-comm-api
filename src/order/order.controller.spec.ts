import { Test, TestingModule } from '@nestjs/testing'

import { OrderController } from './order.controller'
import { OrderService } from './order.service'

import { mockOrder, mockOrders, mockOrderService } from './mockData'

describe('OrderController', () => {
  let controller: OrderController

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

  it('should create one', async () => {
    expect(controller.create(mockOrder)).resolves.toEqual({
      ...mockOrder
    })
  })

  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockOrders)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockOrder.id)).resolves.toEqual(mockOrder)
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
