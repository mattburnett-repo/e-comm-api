import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCartTypeDto } from './dto/create-cart-type.dto'
import { CartType } from './entities/cart-type.entity'
import { CartTypeService } from './cart-type.service'

describe('CartTypeService', () => {
  let service: CartTypeService
  let repo: Repository<CartType>

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

  const mockCartTypeRepository = {
    create: jest.fn().mockResolvedValue(mockCartType),
    save: jest.fn().mockResolvedValue(mockCartType),
    find: jest.fn().mockResolvedValue(mockCartTypes),
    findAll: jest.fn().mockResolvedValue(mockCartTypes),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockCartType),
    update: jest.fn().mockResolvedValue(mockCartType),
    remove: jest.fn().mockResolvedValue(mockCartType)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartTypeService,
        {
          provide: getRepositoryToken(CartType),
          useValue: mockCartTypeRepository
        }
      ]
    }).compile()

    service = module.get<CartTypeService>(CartTypeService)
    repo = module.get<Repository<CartType>>(getRepositoryToken(CartType))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create a cart type', () => {
    expect(service.create(mockCartType)).resolves.toEqual({
      id: 1,
      ...mockCartType
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockCartType })
    expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all cart types', () => {
    expect(service.findAll()).resolves.toEqual(mockCartTypes)
  })

  it('should find a cart type by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById(1)).resolves.toEqual(mockCartType)
    expect(service.findOneById(1)).resolves.toEqual(mockCartType)
    expect(repoSpy).toBeCalledWith(1)
  })

  it('should update a cart type', () => {
    expect(service.update(1, mockCartType)).resolves.toEqual({
      id: 1,
      ...mockCartType
    })
  })

  it('should delete a cart type', () => {
    expect(service.remove(1)).resolves.toEqual({
      ...mockCartType
    })
  })
})
