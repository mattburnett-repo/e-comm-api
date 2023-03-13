import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { AppModule } from '../src/app.module'

const testCartData = {
  id: '2e828168-bfd9-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b',
  cart_type_id: 2,
  name: 'testCartData Cart Name',
  description: 'testCartData Cart Description'
}

import { mockToken } from './mockData'

describe('CartController (e2e)', () => {
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

  it('/cart POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart')
      .send(testCartData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const response = res.body

        expect(response).not.toBeNull()
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart/id/x').expect(400)
  })
  it('/cart/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/cart/id/${testCartData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const cart = res.body

        expect(cart).not.toBeNull()
        expect(cart.cartItem).not.toBeNull()
      })
  })
  it('/cart GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const carts = res.body
        expect(carts.length).toBeGreaterThan(0)

        const cart = carts[0]
        expect(cart).not.toBeNull()

        const cartItems = cart.cartItem
        expect(cartItems).not.toBeNull()

        const cartItem = cartItems[0]
        expect(cartItem).not.toBeNull()
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart/id/x').expect(400)
  })
  it('/cart/id/:id (PATCH)', () => {
    const updatedDescription = 'updated description'
    return request(app.getHttpServer())
      .patch(`/cart/id/${testCartData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testCartData, description: updatedDescription })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const cart = res.body
        expect(cart.description).toEqual(updatedDescription)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart/id/x').expect(400)
  })

  it('/cart/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/cart/id/${testCartData.id}`)
      .expect(200)
  })
})
