import { Controller } from '@nestjs/common'
import { UserAddressesService } from './user-addresses.service'

@Controller('user-adresses')
export class UserAddressesController {
  constructor(private readonly userAdressesService: UserAddressesService) { }
}
