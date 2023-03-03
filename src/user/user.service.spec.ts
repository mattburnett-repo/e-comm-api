import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './entities/user.entity'
import { UserService } from './user.service'

import { mockUser, mockUsers, mockUserRepository } from './mockData'

describe('UserService', () => {
  let service: UserService
  let repo: Repository<User>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })

  it('should create a user', async () => {
    expect(await service.create(mockUser)).toEqual({
      ...mockUser
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockUser })
    expect(repo.save).toBeCalledTimes(1)
  })

  it('should find all users', async () => {
    expect(await service.findAll()).toEqual(mockUsers)
  })

  it('should find a user by id', async () => {
    expect(
      await service.findOneById('ab5b2304-bba9-11ed-afa1-0242ac120002')
    ).toEqual({
      ...mockUser
    })
  })
  it('should find a user by username', async () => {
    expect(await service.findOneByUsername('test')).toEqual({
      ...mockUser
    })
  })
  it('should update a user', async () => {
    expect(service.update('1', mockUser)).resolves.toEqual({
      id: 'ab5b2304-bba9-11ed-afa1-0242ac120002',
      ...mockUser
    })
  })
})
