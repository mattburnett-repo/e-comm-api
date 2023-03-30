import { IsNotEmpty, IsArray } from 'class-validator'

import { CreateCartItemDto } from '../../cart-item/dto/create-cart-item.dto'

export class CreateStripeOrderDto {
  @IsArray()
  @IsNotEmpty()
  cartItems: CreateCartItemDto[]
}
