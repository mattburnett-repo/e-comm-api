import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateSubCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  code: string

  @IsString()
  @IsNotEmpty()
  description: string
}
