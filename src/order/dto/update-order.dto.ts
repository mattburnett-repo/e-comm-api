import { PartialType } from '@nestjs/swagger'
import { CreateOrderDto } from './create-order.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateOrderDto extends PartialType(CreateOrderDto) { }
