/* eslint-disable prettier/prettier */
import {
  Controller,
  Inject,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  Logger
} from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { CreateStripeOrderDto } from './dto/create-stripeOrder.dto'

import Stripe from 'stripe'
import { STRIPE_CLIENT } from '../stripe/constants'

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'
import { ProductService } from '../product/product.service'

@ApiTags('order')
@Controller('order')
export class OrderController {
  logger: Logger

  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe,
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {
    this.logger = new Logger()
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto)
  }

  @Get('stripe-customer-list')
  async listCustomers() {
    return await this.stripe.customers.list()
  }

  @Post('/create-stripe-order')
  async createStripeOrder(@Body() stripeOrder: CreateStripeOrderDto) {
    const { cartItems } = stripeOrder

    this.logger.log(`OrderController create-stripe-order receives stripeOrder with ${stripeOrder.cartItems.length}} item/s.`)

    const lineItems = await Promise.all(
      cartItems.map(async (lineItem) => {
        const item = await this.productService.findOneById(lineItem.product_id)

        return {
          price_data: {
            currency: process.env.STRIPE_CURRENCY,
            product_data: {
              name: item.name,
              images: [item.image_01_url],
            },
            unit_amount: item.price * 100
          },
          quantity: lineItem.productQuantity
        }
      })
    )

    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}?success=true`,
      cancel_url: `${process.env.CLIENT_URL}?success=false`,
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'MX', 'DE', 'FR', 'IT', 'GB'] },
      payment_method_types: ['card']
    })

    // FIXME: insert basic order record
    //    see skipped test 'should create a stripe order' in order.controller.spec.ts
    //    this should be implemented but it's not making sense and right now there is
    //      no more time / attention to devote to it.
    // console.log('order.controller session: ', session)
    // await this.orderService.insertStripeSessionData(session)

    this.logger.log(`OrderController create-stripe-order receives session with id: ${session.id}`)

    return { stripeSession: session }
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.orderService.getProtected()
  }

  @Get()
  findAll() {
    return this.orderService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.orderService.findOneById(id)
  }

  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    return this.orderService.update(id, updateOrderDto)
  }

  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.orderService.remove(id)
  }
}
