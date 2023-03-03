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
  imageUrl: string | null

  @IsNumber()
  @IsNotEmpty()
  price: number
}
