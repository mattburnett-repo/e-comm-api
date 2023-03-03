import { Test, TestingModule } from '@nestjs/testing'

import { CartController } from './cart.controller'
import { CartService } from './cart.service'

import { mockCart, mockCarts, mockCartService } from './mockData'

describe('CartController', () => {
  let controller: CartController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService]
    })
      .overrideProvider(CartService)
      .useValue(mockCartService)
      .compile()

    controller = module.get<CartController>(CartController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should create one', async () => {
    expect(controller.create(mockCart)).resolves.toEqual(mockCart)
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockCarts)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCart.id)).resolves.toEqual(mockCart)
  })
  it('should update one', async () => {
    expect(controller.update('1', mockCart)).resolves.toEqual({
      ...mockCart
    })
  })
  it('should delete one', async () => {
    expect(controller.remove('1')).resolves.toEqual({
      ...mockCart
    })
  })
})
