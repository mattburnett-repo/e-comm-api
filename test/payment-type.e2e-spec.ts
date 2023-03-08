import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { PaymentTypeModule } from '../src/payment-type/payment-type.module'
import { PaymentType } from '../src/payment-type/entities/payment-type.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockPaymentType,
  mockPaymentTypes,
  mockPaymentTypeRepository
} from '../src/payment-type/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('PaymentTypeController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PaymentTypeModule]
    })
      .overrideProvider(getRepositoryToken(PaymentType))
      .useValue(mockPaymentTypeRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/payment-type GETs all', () => {
    return request(app.getHttpServer())
      .get('/payment-type')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockPaymentTypes)
  })

  it('/payment-type POSTs one', () => {
    return request(app.getHttpServer())
      .post('/payment-type')
      .send({ mockPaymentType })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockPaymentType
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/payment-type/id/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockPaymentType })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/payment-type/id/2')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockPaymentType })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id (DELETE)', () => {
    return request(app.getHttpServer()).delete('/payment-type/id/2').expect(200)
  })
})
