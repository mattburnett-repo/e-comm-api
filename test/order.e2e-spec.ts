import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { OrderModule } from '../src/order/order.module'
import { Order } from '../src/order/entities/order.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockOrder,
  // mockOrders,
  mockOrderRepository
} from '../src/order/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('OrderController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OrderModule]
    })
      .overrideProvider(getRepositoryToken(Order))
      .useValue(mockOrderRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/order GETs all', () => {
    return request(app.getHttpServer())
      .get('/order')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('/order POSTs one', () => {
    return request(app.getHttpServer())
      .post('/order')
      .send({ mockOrder })
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/order/id/1').expect(400)
  })
  it('/order/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/order/id/1882376c-bafe-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/order/id/x').expect(400)
  })
  it('/order/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/order/id/1882376c-bafe-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/order/id/1').expect(400)
  })
  it('/order/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/order/id/1882376c-bafe-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
