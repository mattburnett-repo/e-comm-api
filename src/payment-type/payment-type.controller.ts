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
import { PaymentTypeService } from './payment-type.service'
import { CreatePaymentTypeDto } from './dto/create-payment-type.dto'
import { UpdatePaymentTypeDto } from './dto/update-payment-type.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('payment-type')
@Controller('payment-type')
export class PaymentTypeController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly paymentTypeService: PaymentTypeService) { }

  @Post()
  create(@Body() createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeService.create(createPaymentTypeDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.paymentTypeService.getProtected()
  }

  @Get()
  findAll() {
    return this.paymentTypeService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseIntPipe()) id: number) {
    return this.paymentTypeService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updatePaymentTypeDto: UpdatePaymentTypeDto
  ) {
    return this.paymentTypeService.update(id, updatePaymentTypeDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.paymentTypeService.remove(id)
  }
}
