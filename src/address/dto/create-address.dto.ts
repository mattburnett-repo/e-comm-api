import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { PrimaryGeneratedColumn } from 'typeorm'
export class CreateAddressDto {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  @IsNotEmpty()
  address_1: string

  @IsString()
  address_2: string

  @IsString()
  @IsNotEmpty()
  city: string

  @IsString()
  @IsNotEmpty()
  stateProvince: string

  @IsString()
  @IsNotEmpty()
  postalCode: string

  @IsString()
  @IsNotEmpty()
  country: string

  @IsUUID()
  user_id: string
}
