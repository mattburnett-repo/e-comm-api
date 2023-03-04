import { Module } from '@nestjs/common'
import { UserPaymentService } from './user-payment.service'
import { UserPaymentController } from './user-payment.controller'

@Module({
  controllers: [UserPaymentController],
  providers: [UserPaymentService]
})
// eslint-disable-next-line prettier/prettier
export class UserPaymentModule { }
