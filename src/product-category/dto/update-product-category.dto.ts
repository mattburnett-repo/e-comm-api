import { PartialType } from '@nestjs/swagger'
import { CreateProductCategoryDto } from './create-product-category.dto'

export class UpdateProductCategoryDto extends PartialType(
  CreateProductCategoryDto
  // eslint-disable-next-line prettier/prettier
) { }
