import { Controller } from '@nestjs/common'
import { UserAddressService } from './user-address.service'

@Controller('user-address')
export class UserAddressController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userAddressService: UserAddressService) { }
}
