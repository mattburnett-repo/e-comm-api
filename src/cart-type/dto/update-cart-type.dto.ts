import { PartialType } from '@nestjs/swagger'
import { CreateCartTypeDto } from './create-cart-type.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateCartTypeDto extends PartialType(CreateCartTypeDto) { }
