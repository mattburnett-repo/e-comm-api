import { Module } from '@nestjs/common'
import { UserAdressesService } from './user-addresses.service'
import { UserAddressesController } from './user-addresses.controller'

@Module({
  controllers: [UserAddressesController],
  providers: [UserAdressesService]
})
export class UserAddressesModule { }
