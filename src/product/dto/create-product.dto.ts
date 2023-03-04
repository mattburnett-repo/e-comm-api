import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateProductDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  imageUrl: string | null

  @IsNumber()
  @IsNotEmpty()
  price: number
}
