import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { AppModule } from '../src/app.module'
import { mockToken } from './mockData'
import { mockCart } from '../src/cart/mockData'
import { mockCartItem } from '../src/cart-item/mockData'
import { testOrderData } from '../src/order/mockData'

describe('OrderController (e2e)', () => {
  let app: INestApplication

  // Use AppModule so that we get all of the dependencies, and only need to focus on the tests, not all of the .overrides, etc. business
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/order POSTs one', () => {
    return request(app.getHttpServer())
      .post('/order')
      .send(testOrderData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const order = res.body

        expect(order.id).toEqual(testOrderData.id)
        expect(order.tax).toEqual(testOrderData.tax)
        expect(order.total_price).toEqual(testOrderData.total_price)
        expect(order.payment_id).toEqual(testOrderData.payment_id)
        expect(order.order_date).toBeDefined()
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/order/id/x').expect(400)
  })
  it('/order/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/order/id/${testOrderData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const order = res.body

        expect(order.id).toEqual(testOrderData.id)
        expect(order.tax).toEqual(testOrderData.tax)
        expect(order.total_price).toEqual(testOrderData.total_price)
        expect(order.total_price).toBeDefined()
        expect(order.payment_id).toEqual(testOrderData.payment_id)
        expect(order.order_date).toBeDefined()

        const cart = order.cart[0]
        expect(cart.id).toEqual(mockCart.id)
        expect(cart.name).toEqual(mockCart.name)
        expect(cart.description).toEqual(mockCart.description)

        const cartItem = cart.cartItem[0]
        expect(cartItem.id).toEqual(mockCartItem.id)
        expect(cartItem.product_id).toEqual(mockCartItem.product_id)
        expect(cartItem.productName).toEqual(mockCartItem.productName)
        expect(cartItem.productQuantity).toEqual(mockCartItem.productQuantity)
        expect(cartItem.productPrice).toEqual(mockCartItem.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          mockCartItem.lineItemTotalPrice
        )
      })
  })

  it('/order GETs all', () => {
    return request(app.getHttpServer())
      .get('/order')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const orders = res.body

        expect(orders.length).toEqual(2)

        const order = orders[1]
        expect(order.id).toEqual(testOrderData.id)
        expect(order.tax).toEqual(testOrderData.tax)
        expect(order.total_price).toEqual(testOrderData.total_price)
        expect(order.payment_id).toEqual(testOrderData.payment_id)
        expect(order.user_id).toEqual(testOrderData.user_id)
        expect(order.order_date).toBeDefined()

        const cart = order.cart[0]
        expect(cart.id).toEqual(mockCart.id)
        expect(cart.name).toEqual(mockCart.name)
        expect(cart.description).toEqual(mockCart.description)

        const cartItem = cart.cartItem[0]
        expect(cartItem.id).toEqual(mockCartItem.id)
        expect(cartItem.product_id).toEqual(mockCartItem.product_id)
        expect(cartItem.productName).toEqual(mockCartItem.productName)
        expect(cartItem.productQuantity).toEqual(mockCartItem.productQuantity)
        expect(cartItem.productPrice).toEqual(mockCartItem.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          mockCartItem.lineItemTotalPrice
        )
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/order/id/x').expect(400)
  })
  it('/order/id/:id (PATCH)', () => {
    const orderUpdateTax = 3.21

    return request(app.getHttpServer())
      .patch(`/order/id/${testOrderData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testOrderData, tax: orderUpdateTax })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const order = res.body

        expect(order.id).toEqual(testOrderData.id)
        expect(order.tax).toEqual(orderUpdateTax)
        expect(order.total_price).toEqual(testOrderData.total_price)
        expect(order.payment_id).toEqual(testOrderData.payment_id)
        expect(order.user_id).toEqual(testOrderData.user_id)

        const cart = order.cart[0]
        expect(cart.id).toEqual(mockCart.id)
        expect(cart.name).toEqual(mockCart.name)
        expect(cart.description).toEqual(mockCart.description)

        const cartItem = cart.cartItem[0]
        expect(cartItem.id).toEqual(mockCartItem.id)
        expect(cartItem.product_id).toEqual(mockCartItem.product_id)
        expect(cartItem.productName).toEqual(mockCartItem.productName)
        expect(cartItem.productQuantity).toEqual(mockCartItem.productQuantity)
        expect(cartItem.productPrice).toEqual(mockCartItem.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          mockCartItem.lineItemTotalPrice
        )
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/order/id/x').expect(400)
  })
  it('/order/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/order/id/${testOrderData.id}`)
      .expect(200)
  })
})
