import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { PaymentModule } from '../src/payment/payment.module'
import { Payment } from '../src/payment/entities/payment.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockPayment,
  mockPayments,
  mockPaymentRepository
} from '../src/payment/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('PaymentController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PaymentModule]
    })
      .overrideProvider(getRepositoryToken(Payment))
      .useValue(mockPaymentRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/payment GETs all', () => {
    return request(app.getHttpServer())
      .get('/payment')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockPayments)
  })

  it('/payment POSTs one', () => {
    return request(app.getHttpServer())
      .post('/payment')
      .send({ mockPayment })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockPayment
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/payment/id/x').expect(400)
  })
  it('/payment/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/payment/id/cfdd4196-bb02-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockPayment })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/payment/id/x').expect(400)
  })
  it('/payment/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/payment/id/cfdd4196-bb02-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockPayment })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/payment/id/x').expect(400)
  })
  it('/payment/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/payment/id/cfdd4196-bb02-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
