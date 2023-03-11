import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateCartItemDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  productId: string

  @IsString()
  @IsNotEmpty()
  productName: string

  @IsNumber()
  @IsNotEmpty()
  productQuantity: number

  @IsNumber()
  @IsNotEmpty()
  productPrice: number

  @IsNumber()
  @IsNotEmpty()
  lineItemTotalPrice: number
}
