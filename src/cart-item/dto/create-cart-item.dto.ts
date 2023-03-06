import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator'

export class CreateCartItemDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  cartId: string

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
