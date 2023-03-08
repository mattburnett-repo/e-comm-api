import { Test, TestingModule } from '@nestjs/testing'

import { UserController } from './user.controller'
import { UserService } from './user.service'

import { mockUser, mockUsers, mockUserService } from './mockData'

describe('UserController', () => {
  let controller: UserController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
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
