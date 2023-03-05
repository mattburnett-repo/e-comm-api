import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateProductCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string
}
