import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { CartModule } from '../src/cart/cart.module'
import { Cart } from '../src/cart/entities/cart.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import { mockCart, mockCarts, mockCartRepository } from '../src/cart/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('CartController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CartModule]
    })
      .overrideProvider(getRepositoryToken(Cart))
      .useValue(mockCartRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/cart GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockCarts)
  })

  it('/cart POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart')
      .send({ mockCart })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockCart
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart/id/x').expect(400)
  })
  it('/cart/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCart })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart/id/x').expect(400)
  })
  it('/cart/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCart })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart/id/x').expect(400)
  })
  it('/cart/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
