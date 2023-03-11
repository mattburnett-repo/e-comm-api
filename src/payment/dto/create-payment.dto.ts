import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreatePaymentDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  userId: string

  @IsString()
  stripeId: string | null

  @IsNumber()
  created: number

  @IsString()
  paymentMethod: string | null

  @IsString()
  transactionState: string | null

  @IsNumber()
  amount: number
}
