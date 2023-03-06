import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

import { Address } from './entities/address.entity'
@Injectable()
export class AddressService {
  logger: Logger

  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createAddressDto: CreateAddressDto) {
    const newAddress = this.addressRepository.create(createAddressDto)

    this.logger.log(`AddressService created a new Address: ${newAddress.id}`)
    return this.addressRepository.save(newAddress)
  }

  findAll() {
    return this.addressRepository.find()
  }

  findOneById(id: string) {
    return this.addressRepository.findOneById(id)
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateAddressDto.id
    retVal.firstName = updateAddressDto.firstName
    retVal.lastName = updateAddressDto.lastName
    retVal.address_1 = updateAddressDto.address_1
    retVal.address_2 = updateAddressDto.address_2
    retVal.city = updateAddressDto.city
    retVal.stateProvince = updateAddressDto.stateProvince
    retVal.postalCode = updateAddressDto.postalCode
    retVal.country = updateAddressDto.country

    this.logger.log(`ExampleService updates an Example: ${id}`)

    return this.addressRepository.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`AddressService deletes an Example: ${id}`)

    return this.addressRepository.remove(toDelete)
  }
}
