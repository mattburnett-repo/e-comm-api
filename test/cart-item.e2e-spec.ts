import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testCartItemData = {
  id: '544b263e-bff2-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  product_id: 'c26e7a10-bb6c-11ed-afa1-0242ac120002',
  productName: 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit',
  productQuantity: 2,
  productPrice: 189.99,
  lineItemTotalPrice: 379.98
}

describe('CartItem Controller (e2e)', () => {
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

  it('/cart-item POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart-item')
      .send(testCartItemData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const cartItem = res.body

        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.cart_id).toEqual(testCartItemData.cart_id)
        expect(cartItem.product_id).toEqual(testCartItemData.product_id)
        expect(cartItem.productName).toEqual(testCartItemData.productName)
        expect(cartItem.productQuantity).toEqual(
          testCartItemData.productQuantity
        )
        expect(cartItem.productPrice).toEqual(testCartItemData.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          testCartItemData.lineItemTotalPrice
        )
      })
  })
  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart-item/id/x').expect(400)
  })
  it('/cart-item/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/cart-item/id/${testCartItemData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const cartItem = res.body

        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.cart_id).toEqual(testCartItemData.cart_id)
        expect(cartItem.product_id).toEqual(testCartItemData.product_id)
        expect(cartItem.productName).toEqual(testCartItemData.productName)
        expect(cartItem.productQuantity).toEqual(
          testCartItemData.productQuantity
        )
        expect(cartItem.productPrice).toEqual(testCartItemData.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          testCartItemData.lineItemTotalPrice
        )

        const cart = cartItem.cart
        expect(cart.id).toEqual(testCartItemData.cart_id)
      })
  })

  it('/cart-item GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart-item')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBeGreaterThanOrEqual(1)

        const cartItem = res.body[1]

        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.cart_id).toEqual(testCartItemData.cart_id)
        expect(cartItem.product_id).toEqual(testCartItemData.product_id)
        expect(cartItem.productName).toEqual(testCartItemData.productName)
        expect(cartItem.productQuantity).toEqual(
          testCartItemData.productQuantity
        )
        expect(cartItem.productPrice).toEqual(testCartItemData.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          testCartItemData.lineItemTotalPrice
        )

        const cart = cartItem.cart
        expect(cart.id).toEqual(testCartItemData.cart_id)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart-item/id/x').expect(400)
  })
  it('/cart-item/id/:id (PATCH)', () => {
    const updateProductNameValue = 'updated product name value'

    return request(app.getHttpServer())
      .patch(`/cart-item/id/${testCartItemData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testCartItemData, productName: updateProductNameValue })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const cartItem = res.body

        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.cart_id).toEqual(testCartItemData.cart_id)
        expect(cartItem.product_id).toEqual(testCartItemData.product_id)
        expect(cartItem.productName).toEqual(updateProductNameValue)
        expect(cartItem.productQuantity).toEqual(
          testCartItemData.productQuantity
        )
        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.id).toEqual(testCartItemData.id)
        expect(cartItem.productPrice).toEqual(testCartItemData.productPrice)
        expect(cartItem.lineItemTotalPrice).toEqual(
          testCartItemData.lineItemTotalPrice
        )

        const cart = cartItem.cart
        expect(cart.id).toEqual(testCartItemData.cart_id)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart-item/id/x').expect(400)
  })
  it('/cart-item/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/cart-item/id/${testCartItemData.id}`)
      .expect(200)
  })
})
