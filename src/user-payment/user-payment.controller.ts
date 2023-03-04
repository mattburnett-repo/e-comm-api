import { Controller } from '@nestjs/common'
import { UserPaymentService } from './user-payment.service'

@Controller('user-payment')
export class UserPaymentController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userPaymentsService: UserPaymentService) { }
}
