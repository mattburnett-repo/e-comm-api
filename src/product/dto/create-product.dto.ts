import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateProductDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsNumber()
  category_id: number

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  image_01_url: string | null
  @IsString()
  image_02_url: string | null

  @IsNumber()
  @IsNotEmpty()
  price: number
}
