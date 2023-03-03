import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'

export class CreateUserDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  firstName: string | null

  @IsString()
  lastName: string | null

  @IsString()
  refreshToken: string | null
}
