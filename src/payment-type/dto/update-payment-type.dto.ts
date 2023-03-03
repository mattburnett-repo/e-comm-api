import { CreatePaymentTypeDto } from './create-payment-type.dto'
import { PartialType } from '@nestjs/swagger'

// eslint-disable-next-line prettier/prettier
export class UpdatePaymentTypeDto extends PartialType(CreatePaymentTypeDto) { }
