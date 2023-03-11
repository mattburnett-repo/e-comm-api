import { IsUUID, IsNotEmpty, IsDate, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateOrderDto {
  @PrimaryGeneratedColumn('uuid')
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
