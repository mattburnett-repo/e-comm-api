import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartTypeService } from './cart-type.service';
import { CreateCartTypeDto } from './dto/create-cart-type.dto';
import { UpdateCartTypeDto } from './dto/update-cart-type.dto';

@Controller('cart-type')
export class CartTypeController {
  constructor(private readonly cartTypeService: CartTypeService) {}

  @Post()
  create(@Body() createCartTypeDto: CreateCartTypeDto) {
    return this.cartTypeService.create(createCartTypeDto);
  }

  @Get()
  findAll() {
    return this.cartTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartTypeDto: UpdateCartTypeDto) {
    return this.cartTypeService.update(+id, updateCartTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartTypeService.remove(+id);
  }
}
