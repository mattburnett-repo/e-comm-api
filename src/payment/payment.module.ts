import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Payment } from './entities/payment.entity'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService]
})
// eslint-disable-next-line prettier/prettier
export class PaymentModule { }
