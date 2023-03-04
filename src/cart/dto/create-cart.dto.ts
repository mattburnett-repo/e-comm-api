import { IsNotEmpty, IsString, IsDate, IsUUID } from 'class-validator'

export class CreateCartDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  name: string
  @IsString()
  description: string

  @IsDate()
  orderDate: Date
}
