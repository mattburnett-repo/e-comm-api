import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { CartItemModule } from '../src/cart-item/cart-item.module'
import { CartItem } from '../src/cart-item/entities/cart-item.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockCartItem,
  mockCartItems,
  mockCartItemRepository
} from '../src/cart-item/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('CartController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CartItemModule]
    })
      .overrideProvider(getRepositoryToken(CartItem))
      .useValue(mockCartItemRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/cart-item GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart-item')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockCartItems)
  })

  it('/cart-item POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart-item')
      .send({ mockCartItem })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockCartItem
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart-item/id/x').expect(400)
  })
  it('/cart-item/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartItem })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart-item/id/x').expect(400)
  })
  it('/cart/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartItem })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart-item/id/x').expect(400)
  })
  it('/cart/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
