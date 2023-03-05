import { Test, TestingModule } from '@nestjs/testing'

import { CartController } from './cart.controller'
import { CreateCartDto } from './dto/create-cart.dto'
import { CartService } from './cart.service'

describe('CartController', () => {
  let controller: CartController

  const mockCart: CreateCartDto = {
    id: 'fad30dac- baf5 - 11ed-afa1 - 0242ac120002',
    name: 'Test Cart Name',
    description: 'Test Cart Description'
  }

  const mockCarts: CreateCartDto[] = [
    {
      id: 'fad30dac- baf5 - 11ed-afa1 - 0242ac120002',
      name: 'Test Cart Name',
      description: 'Test Cart Description'
    },
    {
      id: '9442327e-bb7d-11ed-afa1-0242ac120002',
      name: 'Test Cart Name 2',
      description: 'Test Cart Description 2'
    }
  ]

  const mockCartService = {
    create: jest.fn().mockResolvedValue(mockCart),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockCarts),
    findOneById: jest.fn().mockResolvedValue(mockCart),
    update: jest.fn().mockResolvedValue(mockCart),
    delete: jest.fn().mockResolvedValue(mockCart),
    remove: jest.fn().mockResolvedValue(mockCart)
  }

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

  it('should get all', async () => {
    expect(controller.create(mockCart)).resolves.toEqual({
      ...mockCart
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCart.id)).resolves.toEqual(mockCart)
  })
  it('should add one', async () => {
    expect(controller.create(mockCart)).resolves.toEqual({
      ...mockCart
    })
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
