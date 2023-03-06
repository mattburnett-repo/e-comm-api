import { Test, TestingModule } from '@nestjs/testing'

import { AddressController } from './address.controller'
import { CreateAddressDto } from './dto/create-address.dto'
import { AddressService } from './address.service'

describe('AddressController', () => {
  let controller: AddressController

  const mockAddress: CreateAddressDto = {
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

  const mockAddresses: CreateAddressDto[] = [
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

  const mockAddressService = {
    create: jest.fn().mockResolvedValue(mockAddress),
    getProtected: jest
      .fn()
      .mockImplementation(() => 'This is a protected resource'),
    findAll: jest.fn().mockResolvedValue(mockAddresses),
    findOneById: jest.fn().mockResolvedValue(mockAddress),
    update: jest.fn().mockResolvedValue(mockAddress),
    delete: jest.fn().mockResolvedValue(mockAddress),
    remove: jest.fn().mockResolvedValue(mockAddress)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
      providers: [AddressService]
    })
      .overrideProvider(AddressService)
      .useValue(mockAddressService)
      .compile()

    controller = module.get<AddressController>(AddressController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(controller.getProtected()).toBe('This is a protected resource')
  })

  it('should get all', async () => {
    expect(controller.create(mockAddress)).resolves.toEqual({
      ...mockAddress
    })
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockAddress.id)).resolves.toEqual(mockAddress)
  })
  it('should add one', async () => {
    expect(controller.create(mockAddress)).resolves.toEqual({
      ...mockAddress
    })
  })
  it('should update one', async () => {
    expect(controller.update('1', mockAddress)).resolves.toEqual({
      ...mockAddress
    })
  })
  it('should delete one', async () => {
    expect(controller.remove('1')).resolves.toEqual({
      ...mockAddress
    })
  })
})
