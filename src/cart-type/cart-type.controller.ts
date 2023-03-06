import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe
} from '@nestjs/common'
import { CartTypeService } from './cart-type.service'
import { CreateCartTypeDto } from './dto/create-cart-type.dto'
import { UpdateCartTypeDto } from './dto/update-cart-type.dto'

import { ApiBadRequestResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('cart-type')
@Controller('cart-type')
export class CartTypeController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly cartTypeService: CartTypeService) { }

  @Post()
  create(@Body() createCartTypeDto: CreateCartTypeDto) {
    return this.cartTypeService.create(createCartTypeDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.cartTypeService.getProtected()
  }

  @Get()
  findAll() {
    return this.cartTypeService.findAll()
  }

  @Get('/id/:id')
  @ApiBadRequestResponse()
  findOneById(@Param('id', new ParseIntPipe()) id: number) {
    return this.cartTypeService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateCartTypeDto: UpdateCartTypeDto
  ) {
    return this.cartTypeService.update(id, updateCartTypeDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.cartTypeService.remove(id)
  }
}
