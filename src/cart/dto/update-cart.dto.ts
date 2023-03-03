import { PartialType } from '@nestjs/swagger'
import { CreateCartDto } from './create-cart.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateCartDto extends PartialType(CreateCartDto) { }
