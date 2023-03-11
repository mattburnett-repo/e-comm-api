import { IsUUID, IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateProductDto {
  @PrimaryGeneratedColumn('uuid')
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
