import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testPaymentTypeData = {
  id: 7,
  name: 'testPaymentTypeName',
  description: 'testPaymentTypeDescription'
}

describe('PaymentTypeController (e2e)', () => {
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

  it('/payment-type POSTs one', () => {
    return request(app.getHttpServer())
      .post('/payment-type')
      .send(testPaymentTypeData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const paymentType = res.body

        expect(paymentType.id).toEqual(testPaymentTypeData.id)
        expect(paymentType.name).toEqual(testPaymentTypeData.name)
        expect(paymentType.description).toEqual(testPaymentTypeData.description)
      })
  })

  it('/payment-type GETs all', () => {
    return request(app.getHttpServer())
      .get('/payment-type')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const paymentTypes = res.body
        expect(paymentTypes.length).toEqual(7)

        const paymentType = paymentTypes[6]
        expect(paymentType.id).toEqual(testPaymentTypeData.id)
        expect(paymentType.name).toEqual(testPaymentTypeData.name)
        expect(paymentType.description).toEqual(testPaymentTypeData.description)
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/payment-type/id/${testPaymentTypeData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const paymentType = res.body
        expect(paymentType.id).toEqual(testPaymentTypeData.id)
        expect(paymentType.name).toEqual(testPaymentTypeData.name)
        expect(paymentType.description).toEqual(testPaymentTypeData.description)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id (PATCH)', () => {
    const updatedNameValue = 'updated payment type name'

    return request(app.getHttpServer())
      .patch(`/payment-type/id/${testPaymentTypeData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testPaymentTypeData, name: updatedNameValue })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const paymentType = res.body
        expect(paymentType.id).toEqual(testPaymentTypeData.id)
        expect(paymentType.name).toEqual(updatedNameValue)
        expect(paymentType.description).toEqual(testPaymentTypeData.description)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/payment-type/id/x').expect(400)
  })
  it('/payment-type/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/payment-type/id/${testPaymentTypeData.id}`)
      .expect(200)
  })
})
