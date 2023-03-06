import { Test, TestingModule } from '@nestjs/testing'

import { CartItemController } from './cart-item.controller'
import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { CartItemService } from './cart-item.service'

describe('CartItemController', () => {
  let controller: CartItemController

  const mockCartItem: CreateCartItemDto = {
    id: 'fa482164- bb05 - 11ed-afa1 - 0242ac120002',
    cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
    productName: 'Test Product One',
    productQuantity: 5,
    productPrice: 10,
    lineItemTotalPrice: 50
  }

  const mockCartItems: CreateCartItemDto[] = [
    {
      id: 'fa482164- bb05 - 11ed-afa1 - 0242ac120002',
      cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
      productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
      productName: 'Test Product One',
      productQuantity: 5,
      productPrice: 10,
      lineItemTotalPrice: 50
    },
    {
      id: '84f165ac-bb86-11ed-afa1-0242ac120002',
      cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
      productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
      productName: 'Test Product Two',
      productQuantity: 10,
      productPrice: 20,
      lineItemTotalPrice: 100
    }
  ]

  const mockCartItemService = {
    create: jest.fn().mockResolvedValue(mockCartItem),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockCartItems),
    findOneById: jest.fn().mockResolvedValue(mockCartItem),
    update: jest.fn().mockResolvedValue(mockCartItem),
    delete: jest.fn().mockResolvedValue(mockCartItem),
    remove: jest.fn().mockResolvedValue(mockCartItem)
  }
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
  it('should get all', async () => {
    expect(controller.create(mockCartItem)).resolves.toEqual({
      ...mockCartItem
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCartItem.id)).resolves.toEqual(
      mockCartItem
    )
  })
  it('should add one', async () => {
    expect(controller.create(mockCartItem)).resolves.toEqual({
      ...mockCartItem
    })
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
