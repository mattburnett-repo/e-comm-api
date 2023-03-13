import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'

import { Cart } from './entities/cart.entity'
import { CartService } from './cart.service'

import { mockCart, mockCartRepository } from './mockData'

describe('CartService', () => {
  let service: CartService
  // let repo: Repository<Cart>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: getRepositoryToken(Cart),
          useValue: mockCartRepository
        }
      ]
    }).compile()

    service = module.get<CartService>(CartService)
    // repo = module.get<Repository<Cart>>(getRepositoryToken(Cart))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a cart', () => {
    expect(service.create(mockCart)).resolves.toEqual({
      id: '1',
      ...mockCart
    })
    // expect(repo.create).toBeCalledTimes(1)
    // expect(repo.create).toBeCalledWith({ ...mockCart })
    // expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all carts', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    expect(service.findAll()).toBeDefined()
    // expect(service.findAll()).resolves.toEqual(mockCarts)
    // FIXME: this should also look for cart items.
  })

  it('should find a cart by id', () => {
    expect(service.findOneById(mockCart.id)).resolves.toEqual(mockCart)
  })

  it('should update a cart', () => {
    expect(
      service.update('fad30dac-baf5-11ed-afa1-0242ac120002', mockCart)
    ).resolves.toEqual({
      id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
      ...mockCart
    })
  })

  it('should delete a cart', () => {
    expect(
      service.remove('fad30dac-baf5-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockCart
    })
  })
})
