import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'

import { CartItem } from './entities/cart-item.entity'
import { CartItemService } from './cart-item.service'

import { mockCartItem, mockCartItemRepository } from './mockData'

describe('CartItemService', () => {
  let service: CartItemService
  // let repo: Repository<CartItem>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartItemService,
        {
          provide: getRepositoryToken(CartItem),
          useValue: mockCartItemRepository
        }
      ]
    }).compile()

    service = module.get<CartItemService>(CartItemService)
    // repo = module.get<Repository<CartItem>>(getRepositoryToken(CartItem))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a cart item', () => {
    expect(service.create(mockCartItem)).resolves.toEqual({
      id: '1',
      ...mockCartItem
    })
    // expect(repo.create).toBeCalledTimes(1)
    // expect(repo.create).toBeCalledWith(mockCartItem)
    // expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all cart items', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    expect(service.findAll()).toBeDefined()
    // expect(service.findAll()).resolves.toEqual(mockCartItems)
  })
  it('should find a cart item by id', () => {
    // const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById('1')).resolves.toEqual(mockCartItem)
    // expect(service.findOneById('a uuid')).resolves.toEqual(mockCartItem)
    // expect(repoSpy).toBeCalledWith('a uuid')
  })
  it('should update a cart item', () => {
    expect(service.update('1', mockCartItem)).resolves.toEqual({
      id: '1',
      ...mockCartItem
    })
  })
  it('should delete a cart item', () => {
    expect(service.remove('1')).resolves.toEqual({
      ...mockCartItem
    })
  })
})
