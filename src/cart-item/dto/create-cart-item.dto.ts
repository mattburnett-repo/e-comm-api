import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateCartItemDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  cart_id: string

  @IsUUID()
  @IsNotEmpty()
  product_id: string

  @IsString()
  @IsNotEmpty()
  productName: string

  @IsNumber()
  @IsNotEmpty()
  productQuantity: number

  @IsDecimal()
  @IsNotEmpty()
  productPrice: number

  @IsDecimal()
  @IsNotEmpty()
  lineItemTotalPrice: number
}
