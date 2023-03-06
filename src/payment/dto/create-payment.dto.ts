import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreatePaymentDto {
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
