import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PaymentType } from './entities/payment-type.entity'
import { PaymentTypeService } from './payment-type.service'
import { PaymentTypeController } from './payment-type.controller'

@Module({
  imports: [TypeOrmModule.forFeature([PaymentType])],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService],
  exports: [PaymentTypeService]
})
// eslint-disable-next-line prettier/prettier
export class PaymentTypeModule { }
