import { Module } from '@nestjs/common'
import { UserAddressService } from './user-address.service'
import { UserAddressController } from './user-address.controller'

@Module({
  controllers: [UserAddressController],
  providers: [UserAddressService]
})
// eslint-disable-next-line prettier/prettier
export class UserAddressModule { }
