import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreatePaymentTypeDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string
}
