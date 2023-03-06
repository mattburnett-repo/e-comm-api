import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Address } from './entities/address.entity'
import { AddressService } from './address.service'
import { AddressController } from './address.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService]
})
// eslint-disable-next-line prettier/prettier
export class AddressModule { }
