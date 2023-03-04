import { IsUUID, IsNotEmpty, IsString } from 'class-validator'

export class CreateCartTypeDto {
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string
}
