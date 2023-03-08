import { Test, TestingModule } from '@nestjs/testing'

import { CartTypeController } from './cart-type.controller'
import { CartTypeService } from './cart-type.service'

import { mockCartType, mockCartTypes, mockCartTypeService } from './mockData'

describe('CartTypeController', () => {
  let controller: CartTypeController

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

  it('should create one', async () => {
    expect(controller.create(mockCartType)).resolves.toEqual({
      ...mockCartType
    })
  })
  it('should get get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockCartTypes)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockCartType.id)).resolves.toEqual(
      mockCartType
    )
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
