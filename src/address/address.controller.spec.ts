import { Test, TestingModule } from '@nestjs/testing'

import { AddressController } from './address.controller'
import { AddressService } from './address.service'

import { mockAddress, mockAddresses, mockAddressService } from './mockData'

describe('AddressController', () => {
  let controller: AddressController

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

  it('should create one', async () => {
    expect(controller.create(mockAddress)).resolves.toEqual({
      ...mockAddress
    })
  })
  it('should get all', async () => {
    expect(controller.findAll()).resolves.toEqual(mockAddresses)
  })
  it('should get one by id', async () => {
    expect(controller.findOneById(mockAddress.id)).resolves.toEqual(mockAddress)
  })
  it('should find addresses by user id', async () => {
    expect(
      controller.findByUserId('ab5b2304-bba9-11ed-afa1-0242ac120002')
    ).resolves.toEqual(mockAddresses)
  })
  it('should find addresses by username', async () => {
    expect(controller.findByUsername('testOne')).resolves.toEqual(mockAddresses)
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
