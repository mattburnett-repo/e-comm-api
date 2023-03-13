import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreatePaymentDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  user_id: string

  @IsNumber()
  @IsNotEmpty()
  payment_type_id: number

  @IsString()
  stripe_id: string | null

  @IsNumber()
  created: number

  @IsString()
  payment_method: string | null

  @IsString()
  receipt_url: string | null

  @IsString()
  transaction_status: string | null

  @IsNumber()
  amount: number
}
