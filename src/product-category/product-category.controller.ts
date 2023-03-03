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
import { ProductCategoryService } from './product-category.service'
import { CreateProductCategoryDto } from './dto/create-product-category.dto'
import { UpdateProductCategoryDto } from './dto/update-product-category.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('product-category')
@Controller('product-category')
export class ProductCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly productCategoryService: ProductCategoryService) { }

  @Post()
  create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return this.productCategoryService.create(createProductCategoryDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.productCategoryService.getProtected()
  }

  @Get()
  findAll() {
    return this.productCategoryService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseIntPipe()) id: number) {
    return this.productCategoryService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateProductCategorytDto: UpdateProductCategoryDto
  ) {
    return this.productCategoryService.update(id, updateProductCategorytDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.productCategoryService.remove(id)
  }
}
