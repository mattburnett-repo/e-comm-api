import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { CartItem } from './entities/cart-item.entity'
import { CartItemService } from './cart-item.service'

describe('CartItemService', () => {
  let service: CartItemService
  let repo: Repository<CartItem>

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

  const mockCartItemRepository = {
    create: jest.fn().mockResolvedValue(mockCartItem),
    save: jest.fn().mockResolvedValue(mockCartItem),
    find: jest.fn().mockResolvedValue(mockCartItems),
    findAll: jest.fn().mockResolvedValue(mockCartItems),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockCartItem),
    update: jest.fn().mockResolvedValue({ ...mockCartItem }),
    remove: jest.fn().mockResolvedValue(mockCartItem)
  }

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
    repo = module.get<Repository<CartItem>>(getRepositoryToken(CartItem))
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
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockCartItem })
    expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all cart items', () => {
    expect(service.findAll()).resolves.toEqual(mockCartItems)
  })
  it('should find a cart item by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById('1')).resolves.toEqual(mockCartItem)
    expect(service.findOneById('a uuid')).resolves.toEqual(mockCartItem)
    expect(repoSpy).toBeCalledWith('a uuid')
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
