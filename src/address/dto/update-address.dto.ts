import { PartialType } from '@nestjs/swagger'
import { CreateAddressDto } from './create-address.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateAddressDto extends PartialType(CreateAddressDto) { }
