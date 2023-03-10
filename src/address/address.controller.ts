import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards
} from '@nestjs/common'
import { AddressService } from './address.service'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('address')
@Controller('address')
export class AddressController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly addressService: AddressService) { }

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.addressService.getProtected()
  }

  @Get()
  findAll() {
    return this.addressService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.addressService.findOneById(id)
  }
  @Get('/user-id/:id')
  findByUserId(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.addressService.findByUserId(id)
  }
  @Get('/username/:username')
  findByUsername(@Param('username') username: string) {
    return this.addressService.findByUsername(username)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateTestDto: UpdateAddressDto
  ) {
    return this.addressService.update(id, updateTestDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.addressService.remove(id)
  }
}
