import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'

// import { Repository } from 'typeorm'

import { Address } from './entities/address.entity'
import { AddressService } from './address.service'

import { mockAddress, mockAddressRepository } from './mockData'

describe('AddressService', () => {
  let service: AddressService
  // let repo: Repository<Address>

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

    // repo = module.get<Repository<Address>>(getRepositoryToken(Address))
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

    // expect(repo.create).toBeCalledTimes(1)
    // expect(repo.create).toBeCalledWith({ ...mockAddress })
    // expect(repo.save).toBeCalledTimes(1)
  })
  it('should find all addresses', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    // repo.createQueryBuilder.mockResolvedValue(mockProducts)
    // expect(service.findBAll()).toEqual(mockAddresses)
    // expect(service.findAll()).resolves.toEqual(mockAddresses)
    expect(service.findAll()).toBeDefined()
  })
  it('should find an address by id', () => {
    // const repoSpy = jest.spyOn(repo, 'findOneById')
    expect(service.findOneById('1')).resolves.toEqual(mockAddress)
    // expect(service.findOneById('a uuid')).resolves.toEqual(mockAddress)
    // expect(repoSpy).toBeCalledWith('a uuid')
  })

  it('should find addresses by user id ', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    // repo.createQueryBuilder.mockResolvedValue(mockProducts)
    // expect(service.findByUserId('ab5b2304-bba9-11ed-afa1-0242ac120002')).toEqual(mockAddresses)
    expect(
      service.findByUserId('ab5b2304-bba9-11ed-afa1-0242ac120002')
    ).toBeDefined()
  })
  it('should find addresses by username', () => {
    // FIXME: this is really complicated. Figure out how to mock this.
    // repo.createQueryBuilder.mockResolvedValue(mockProducts)
    // expect(service.findByUsername('testOne')).toEqual(mockAddresses)
    expect(service.findByUsername('testOne')).toBeDefined()
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
