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
import { CartItemService } from './cart-item.service'
import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'
@ApiTags('cart-item')
@Controller('cart-item')
export class CartItemController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly service: CartItemService) { }

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.service.create(createCartItemDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.service.getProtected()
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.service.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCartItemDto: UpdateCartItemDto
  ) {
    return this.service.update(id, updateCartItemDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.service.remove(id)
  }
}
