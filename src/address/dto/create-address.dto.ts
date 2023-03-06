import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
export class CreateAddressDto {
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
}
