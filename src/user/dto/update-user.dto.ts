import { PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'

// eslint-disable-next-line prettier/prettier
export class UpdateUserDto extends PartialType(CreateUserDto) { }
