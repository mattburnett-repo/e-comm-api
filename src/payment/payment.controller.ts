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
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { UpdatePaymentDto } from './dto/update-payment.dto'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.paymentService.getProtected()
  }

  @Get()
  findAll() {
    return this.paymentService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.paymentService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateTestDto: UpdatePaymentDto
  ) {
    return this.paymentService.update(id, updateTestDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.paymentService.remove(id)
  }
}
