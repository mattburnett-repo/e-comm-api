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
  constructor(private readonly cartItemService: CartItemService) { }

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.create(createCartItemDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.cartItemService.getProtected()
  }

  @Get()
  findAll() {
    return this.cartItemService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.cartItemService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateCartItemDto: UpdateCartItemDto
  ) {
    return this.cartItemService.update(id, updateCartItemDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.cartItemService.remove(id)
  }
}
