import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateCartDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @IsNotEmpty()
  user_id: string

  @IsString()
  name: string

  @IsString()
  description: string
}
