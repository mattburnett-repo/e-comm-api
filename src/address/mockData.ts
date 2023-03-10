import { CreateAddressDto } from './dto/create-address.dto'

export const mockAddress: CreateAddressDto = {
  id: '324e2014-bafb-11ed-afa1-0242ac120002',
  firstName: 'Test First name',
  lastName: 'Test Last Name',
  address_1: '123 Street Ave.',
  address_2: 'Suite 3',
  city: 'Test City',
  stateProvince: 'Test State',
  postalCode: '12345',
  country: 'Deutschland',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockAddresses: CreateAddressDto[] = [
  {
    id: '324e2014-bafb-11ed-afa1-0242ac120002',
    firstName: 'Test First name',
    lastName: 'Test Last Name',
    address_1: '123 Street Ave.',
    address_2: 'Suite 3',
    city: 'Test City',
    stateProvince: 'Test State',
    postalCode: '12345',
    country: 'Deutschland',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
  },
  {
    id: '6baa2042-bb78-11ed-afa1-0242ac120002',
    firstName: 'Test First name 2',
    lastName: 'Test Last Name 2',
    address_1: '123 Street Ave. 2',
    address_2: 'Suite 3 2',
    city: 'Test City 2',
    stateProvince: 'Test State 2',
    postalCode: '12345 2',
    country: 'Deutschland 2',
    user_id: 'a4750ec8-b7d6-4188-995e-172335bc4cc5'
  }
]

export const testAddress = {
  id: '6baa2042-bb78-11ed-afa1-0242ac120002',
  firstName: 'Test First name 3',
  lastName: 'Test Last Name 3',
  address_1: '123 Street Ave. 3',
  address_2: 'Suite 3 3',
  city: 'Test City 3',
  stateProvince: 'Test State 3',
  postalCode: '12345 3',
  country: 'Deutschland 3',
  user_id: '4c02b8be-c099-11ed-afa1-0242ac120002'
}

export const mockAddressRepository = {
  create: jest.fn().mockResolvedValue(mockAddress),
  save: jest.fn().mockResolvedValue(mockAddress),
  find: jest.fn().mockResolvedValue(mockAddresses),
  findAll: jest.fn().mockResolvedValue(mockAddresses),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockAddress),
  findByUserId: jest.fn().mockResolvedValue(mockAddress),
  findByUsername: jest.fn().mockResolvedValue(mockAddress),
  update: jest.fn().mockResolvedValue({ ...mockAddress }),
  remove: jest.fn().mockResolvedValue(mockAddress),

  createQueryBuilder: jest.fn(() => ({
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    // setParameter: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(mockAddress)
  }))
}

export const mockAddressService = {
  create: jest.fn().mockResolvedValue(mockAddress),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockAddresses),
  findOneById: jest.fn().mockResolvedValue(mockAddress),
  findByUserId: jest.fn().mockResolvedValue(mockAddresses),
  findByUsername: jest.fn().mockResolvedValue(mockAddresses),
  update: jest.fn().mockResolvedValue(mockAddress),
  delete: jest.fn().mockResolvedValue(mockAddress),
  remove: jest.fn().mockResolvedValue(mockAddress)
}

module.exports = {
  mockAddress: mockAddress,
  mockAddresses: mockAddresses,
  testAddress: testAddress,
  mockAddressRepository: mockAddressRepository,
  mockAddressService: mockAddressService
}
