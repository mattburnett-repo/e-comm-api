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
  country: 'Deutschland'
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
    country: 'Deutschland'
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
    country: 'Deutschland 2'
  }
]

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
    getMany: jest.fn().mockReturnThis()
    // getMany: jest.fn().mockResolvedValue(mockProducts)
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
  mockAddressRepository: mockAddressRepository,
  mockAddressService: mockAddressService
}
