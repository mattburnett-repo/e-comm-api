import { CreateUserDto } from './dto/create-user.dto'

export const mockUser: CreateUserDto = {
  id: 'ab5b2304-bba9-11ed-afa1-0242ac120002',
  firstName: 'test',
  lastName: 'test',
  username: 'test',
  password: 'test',
  email: 'test@test.com',
  refreshToken: 'test'
}

export const mockUsers: CreateUserDto[] = [
  {
    id: 'ab5b2304-bba9-11ed-afa1-0242ac120002',
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    password: 'test',
    email: 'test@test.com',
    refreshToken: 'test'
  },
  {
    id: 'b9113c68-bba9-11ed-afa1-0242ac120002',
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    password: 'test',
    email: 'test@test.com',
    refreshToken: 'test'
  }
]

export const mockUserRepository = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest.fn().mockResolvedValue(mockUser),
  find: jest.fn().mockImplementation(() => Promise.resolve(mockUsers)),
  findAll: jest.fn().mockResolvedValue(mockUsers),
  findOne: jest.fn().mockImplementation(() => Promise.resolve({ ...mockUser })),
  findOneById: jest
    .fn()
    .mockImplementation(() => Promise.resolve({ ...mockUser })),
  findOneByUsername: jest.fn().mockResolvedValue(mockUser),
  update: jest.fn().mockImplementation(() => Promise.resolve({ ...mockUser })),
  remove: jest.fn().mockResolvedValue(mockUser)
}

export const mockUserService = {
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

module.exports = {
  mockUser: mockUser,
  mockUsers: mockUsers,
  mockUserRepository: mockUserRepository,
  mockUserService: mockUserService
}
