import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateAddressDto } from './dto/create-address.dto'
import { Address } from './entities/address.entity'
import { AddressService } from './address.service'

describe('AddressService', () => {
  let service: AddressService
  let repo: Repository<Address>

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

  const mockAddressRepository = {
    create: jest.fn().mockResolvedValue(mockAddress),
    save: jest.fn().mockResolvedValue(mockAddress),
    find: jest.fn().mockResolvedValue(mockAddresses),
    findAll: jest.fn().mockResolvedValue(mockAddresses),
    getProtected: jest.fn().mockImplementation(),
    findOneById: jest.fn().mockResolvedValue(mockAddress),
    update: jest.fn().mockResolvedValue({ ...mockAddress }),
    remove: jest.fn().mockResolvedValue(mockAddress)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: getRepositoryToken(Address),
          useValue: mockAddressRepository
        }
      ]
    }).compile()

    service = module.get<AddressService>(AddressService)
    repo = module.get<Repository<Address>>(getRepositoryToken(Address))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  it('should have a protected resource', () => {
    expect(service.getProtected()).toEqual(
      'This is a protected resource. If you see this, authentication was successful.'
    )
  })
  it('should create an address', () => {
    expect(service.create(mockAddress)).resolves.toEqual({
      id: '324e2014-bafb-11ed-afa1-0242ac120002',
      ...mockAddress
    })
    expect(repo.create).toBeCalledTimes(1)
    expect(repo.create).toBeCalledWith({ ...mockAddress })
    expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all addresses', () => {
    expect(service.findAll()).resolves.toEqual(mockAddresses)
  })
  it('should find an address by id', () => {
    const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById('1')).resolves.toEqual(mockAddress)
    expect(service.findOneById('a uuid')).resolves.toEqual(mockAddress)
    expect(repoSpy).toBeCalledWith('a uuid')
  })

  it('should update an address', () => {
    expect(service.update('1', mockAddress)).resolves.toEqual({
      id: '324e2014-bafb-11ed-afa1-0242ac120002',
      ...mockAddress
    })
  })

  it('should delete an address', () => {
    expect(
      service.remove('324e2014-bafb-11ed-afa1-0242ac120002')
    ).resolves.toEqual({
      ...mockAddress
    })
  })
})
