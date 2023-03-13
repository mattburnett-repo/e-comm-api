import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

import { Address } from './entities/address.entity'
@Injectable()
export class AddressService {
  logger: Logger

  constructor(@InjectRepository(Address) private repo: Repository<Address>) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createAddressDto: CreateAddressDto): Promise<Address> {
    const retVal = this.repo.create(createAddressDto)

    this.logger.log(`AddressService created a new Address: ${retVal.id}`)
    return this.repo.save(retVal)
  }

  findAll(): Promise<Address[]> {
    return this.repo
      .createQueryBuilder('address')
      .leftJoinAndSelect('address.user', 'user')
      .select([
        'address.id',
        'address.firstName',
        'address.lastName',
        'address.address_1',
        'address.address_2',
        'address.city',
        'address.stateProvince',
        'address.postalCode',
        'address.country',
        'user.id',
        'user.username'
      ])
      .getMany()
  }

  findOneById(id: string): Promise<Address> {
    return this.repo
      .createQueryBuilder('address')
      .leftJoinAndSelect('address.user', 'user')
      .select([
        'address.id',
        'address.firstName',
        'address.lastName',
        'address.address_1',
        'address.address_2',
        'address.city',
        'address.stateProvince',
        'address.postalCode',
        'address.country',
        'user.id',
        'user.username'
      ])
      .where('address.id = :id', { id })
      .getOne()
  }

  findByUserId(id: string): Promise<Address[]> {
    return this.repo
      .createQueryBuilder('address')
      .leftJoinAndSelect('address.user', 'user')
      .select([
        'address.id',
        'address.firstName',
        'address.lastName',
        'address.address_1',
        'address.address_2',
        'address.city',
        'address.stateProvince',
        'address.postalCode',
        'address.country',
        'user.id',
        'user.username'
      ])
      .where('user.id = :id', { id })
      .getMany()
  }
  findByUsername(username: string): Promise<Address[]> {
    return this.repo
      .createQueryBuilder('address')
      .leftJoinAndSelect('address.user', 'user')
      .select([
        'address.id',
        'address.firstName',
        'address.lastName',
        'address.address_1',
        'address.address_2',
        'address.city',
        'address.stateProvince',
        'address.postalCode',
        'address.country',
        'user.id',
        'user.username'
      ])
      .where('user.username = :username', { username })
      .getMany()
  }

  async update(
    id: string,
    updateAddressDto: UpdateAddressDto
  ): Promise<Address> {
    this.logger.log(`AddressService updates an Address: ${id}`)

    const updated = await this.repo.save(updateAddressDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`AddressService deletes an Address: ${id}`)

    return this.repo.remove(toDelete)
  }
}
