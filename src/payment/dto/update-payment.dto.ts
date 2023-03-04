import { PartialType } from '@nestjs/swagger'
import { CreatePaymentDto } from './create-payment.dto'

// eslint-disable-next-line prettier/prettier
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) { }
