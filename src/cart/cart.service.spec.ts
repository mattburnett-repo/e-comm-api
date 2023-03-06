import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartDto } from './dto/create-cart.dto'
import { Cart } from './entities/cart.entity'
import { CartService } from './cart.service'

describe('CartService', () => {
  let service: CartService
  let repo: Repository<Cart>

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

  const mockCartRepository = {
    create: jest.fn().mockResolvedValue(mockCart),
    save: jest.fn().mockResolvedValue(mockCart),
    find: jest.fn().mockResolvedValue(mockCarts),
    findAll: jest.fn().mockResolvedValue(mockCarts),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockCart),
    update: jest.fn().mockResolvedValue({ ...mockCart }),
    remove: jest.fn().mockResolvedValue(mockCart)
  }

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
    repo = module.get<Repository<Cart>>(getRepositoryToken(Cart))
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
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockCart })
    expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all carts', () => {
    expect(service.findAll()).resolves.toEqual(mockCarts)
  })

  it('should find a cart by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(
      service.findOneById('fad30dac- baf5 - 11ed-afa1 - 0242ac120002')
    ).resolves.toEqual(mockCart)
    expect(service.findOneById('a uuid')).resolves.toEqual(mockCart)
    expect(repoSpy).toBeCalledWith('a uuid')
  })

  it('should update a cart', () => {
    expect(
      service.update('fad30dac- baf5 - 11ed-afa1 - 0242ac120002', mockCart)
    ).resolves.toEqual({
      id: 'fad30dac- baf5 - 11ed-afa1 - 0242ac120002',
      ...mockCart
    })
  })

  it('should delete a cart', () => {
    expect(
      service.remove('fad30dac- baf5 - 11ed-afa1 - 0242ac120002')
    ).resolves.toEqual({
      ...mockCart
    })
  })
})
