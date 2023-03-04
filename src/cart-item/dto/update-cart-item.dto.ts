import { PartialType } from '@nestjs/swagger'
import { CreateCartItemDto } from './create-cart-item.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateCartItemDto extends PartialType(CreateCartItemDto) { }
