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
import { SubCategoryService } from './sub-category.service'
import { CreateSubCategoryDto } from './dto/create-sub-category.dto'
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('sub-category')
@Controller('sub-category')
export class SubCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly subCategoryService: SubCategoryService) { }

  @Post()
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoryService.create(createSubCategoryDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.subCategoryService.getProtected()
  }
  k

  @Get()
  findAll() {
    return this.subCategoryService.findAll()
  }
  @Get('/id/:id')
  findOneById(@Param('id', new ParseIntPipe()) id: number) {
    return this.subCategoryService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto
  ) {
    return this.subCategoryService.update(+id, updateSubCategoryDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.subCategoryService.remove(+id)
  }
}
