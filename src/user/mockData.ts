import { CreateUserDto } from './dto/create-user.dto'

export const mockUser: CreateUserDto = {
  id: '964275ed-f9da-49b6-8fde-9da1d472197b',
  firstName: 'Happy',
  lastName: 'Customer',
  username: 'HappyCustomer',
  password: 'happyCustomer',
  email: 'happy@customer.com',
  refreshToken: null
}

export const mockUsers: CreateUserDto[] = [
  {
    id: '964275ed-f9da-49b6-8fde-9da1d472197b',
    firstName: 'Happy',
    lastName: 'Customer',
    username: 'HappyCustomer',
    password: 'hapyyCustomer',
    email: 'happy@customer.com',
    refreshToken: null
  },
  {
    id: '3cdc6e10-a53f-40c2-9449-1beff9dbc5f4',
    firstName: 'Test',
    lastName: 'One',
    username: 'testOne',
    password: 'testOne',
    email: 'test@one.com',
    refreshToken:
      '$argon2id$v=19$m=65536,t=3,p=4$3X3VtwuOhovbHQUUYR6Pdw$YNk1IEF8XfSHr06XzRWGoVVeBj1EPw+6jScQdzCFjjI'
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
