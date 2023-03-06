import { Test, TestingModule } from '@nestjs/testing'
import { CreateUserDto } from './dto/create-user.dto'
import { UserController } from './user.controller'
import { UserService } from './user.service'

describe('UserController', () => {
  let controller: UserController

  const mockUser: CreateUserDto = {
    id: '1',
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    password: 'test',
    email: 'test@test.com',
    refreshToken: 'test'
  }
  const mockUsers: CreateUserDto[] = [
    {
      id: '1',
      firstName: 'test',
      lastName: 'test',
      username: 'test',
      password: 'test',
      email: 'test@test.com',
      refreshToken: 'test'
    },
    {
      id: '2',
      firstName: 'test',
      lastName: 'test',
      username: 'test',
      password: 'test',
      email: 'test@test.com',
      refreshToken: 'test'
    }
  ]
  const mockUsersService = {
    create: jest.fn().mockResolvedValue(mockUser),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockUsers),
    findOneById: jest.fn().mockResolvedValue(mockUser),
    findOneByUsername: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn((id, mockUser) => ({
      id,
      ...mockUser
    })),
    delete: jest.fn().mockResolvedValue(mockUser)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    })
      .overrideProvider(UserService)
      .useValue(mockUsersService)
      .compile()

    controller = module.get<UserController>(UserController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should create a user', () => {
    expect(controller.create(mockUser)).resolves.toEqual({
      ...mockUser
    })
  })

  it('should find all users', () => {
    expect(controller.findAll()).resolves.toEqual(mockUsers)
  })

  it('should find a user by id', () => {
    expect(controller.findOneById('1')).resolves.toEqual(mockUser)
  })

  it('should find a user by username', () => {
    expect(controller.findOneByUsername('test')).resolves.toEqual({
      ...mockUser
    })
  })

  it('should update a user', () => {
    expect(controller.update('1', mockUser)).toEqual({
      ...mockUser
    })
  })

  it('should delete a user', () => {
    expect(controller.update('1', mockUser)).toEqual({
      ...mockUser
    })
  })
})
