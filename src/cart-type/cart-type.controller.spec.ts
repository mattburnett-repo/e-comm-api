import { Test, TestingModule } from '@nestjs/testing'

import { CartTypeController } from './cart-type.controller'
import { CreateCartTypeDto } from './dto/create-cart-type.dto'
import { CartTypeService } from './cart-type.service'

describe('CartTypeController', () => {
  let controller: CartTypeController

  const mockCartType: CreateCartTypeDto = {
    id: 1,
    name: 'User',
    description: 'Typical user cart'
  }

  const mockCartTypes: CreateCartTypeDto[] = [
    {
      id: 1,
      name: 'User',
      description: 'Typical user cart'
    },
    {
      id: 2,
      name: 'Gift',
      description: 'Gift cart'
    }
  ]

  const mockCartTypeService = {
    create: jest.fn().mockResolvedValue(mockCartType),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockCartTypes),
    findOneById: jest.fn().mockResolvedValue(mockCartType),
    update: jest.fn().mockResolvedValue(mockCartType),
    delete: jest.fn().mockResolvedValue(mockCartType),
    remove: jest.fn().mockResolvedValue(mockCartType)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartTypeController],
      providers: [CartTypeService]
    })
      .overrideProvider(CartTypeService)
      .useValue(mockCartTypeService)
      .compile()

    controller = module.get<CartTypeController>(CartTypeController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should get all', async () => {
    expect(controller.create(mockCartType)).resolves.toEqual({
      ...mockCartType
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCartType.id)).resolves.toEqual(
      mockCartType
    )
  })
  it('should add one', async () => {
    expect(controller.create(mockCartType)).resolves.toEqual({
      ...mockCartType
    })
  })
  it('should update one', async () => {
    expect(controller.update(1, mockCartType)).resolves.toEqual({
      ...mockCartType
    })
  })
  it('should delete one', async () => {
    expect(controller.remove(1)).resolves.toEqual({
      ...mockCartType
    })
  })
})
