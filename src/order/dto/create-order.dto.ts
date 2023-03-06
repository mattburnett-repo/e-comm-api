import { IsUUID, IsNotEmpty, IsDate, IsNumber } from 'class-validator'

export class CreateOrderDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsDate()
  @IsNotEmpty()
  orderDate: Date

  @IsNumber()
  tax: number

  @IsNumber()
  totalPrice: number

  @IsNumber()
  paymentId: number
}
