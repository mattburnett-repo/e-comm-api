import { IsUUID, IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateOrderDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  cart_id: string

  @IsString()
  stripe_id: string

  @IsDate()
  @IsNotEmpty()
  order_date: Date

  @IsNumber()
  tax: number

  @IsNumber()
  total_price: number

  @IsUUID()
  payment_id: string

  @IsUUID()
  user_id: string
}
