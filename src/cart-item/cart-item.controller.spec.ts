import { Test, TestingModule } from '@nestjs/testing'

import { CartItemController } from './cart-item.controller'
import { CartItemService } from './cart-item.service'

import { mockCartItem, mockCartItems, mockCartItemService } from './mockData'

describe('CartItemController', () => {
  let controller: CartItemController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartItemController],
      providers: [CartItemService]
    })
      .overrideProvider(CartItemService)
      .useValue(mockCartItemService)
      .compile()

    controller = module.get<CartItemController>(CartItemController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })
  it('should create one', async () => {
    expect(controller.create(mockCartItem)).resolves.toEqual({
      ...mockCartItem
    })
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockCartItems)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCartItem.id)).resolves.toEqual(
      mockCartItem
    )
  })
  it('should update one', async () => {
    expect(controller.update('1', mockCartItem)).resolves.toEqual({
      ...mockCartItem
    })
  })
  it('should delete one', async () => {
    expect(controller.remove('1')).resolves.toEqual({
      ...mockCartItem
    })
  })
})
