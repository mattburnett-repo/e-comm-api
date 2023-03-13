import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken, mockUserId, mockStripeId } from './mockData'
import { AppModule } from '../src/app.module'

const testPaymentData = {
  id: '0d2d519e-c08a-11ed-afa1-0242ac120002',
  user_id: mockUserId,
  payment_type_id: 6,
  stripe_id: mockStripeId,
  created: 12345,
  payment_method: 'test-payment-method',
  receipt_url: 'https://receipt_url.com',
  transaction_status: 'test-transaction_status',
  amount: 123.45
}

describe('PaymentController (e2e)', () => {
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

  it('/payment POSTs one', () => {
    return request(app.getHttpServer())
      .post('/payment')
      .send(testPaymentData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const payment = res.body

        expect(payment.id).toEqual(testPaymentData.id)
        expect(payment.user_id).toEqual(testPaymentData.user_id)
        expect(payment.payment_type_id).toEqual(testPaymentData.payment_type_id)
        expect(payment.stripe_id).toEqual(testPaymentData.stripe_id)
        expect(payment.created).toEqual(testPaymentData.created)
        expect(payment.payment_method).toEqual(testPaymentData.payment_method)
        expect(payment.receipt_url).toEqual(testPaymentData.receipt_url)
        expect(payment.transaction_status).toEqual(
          testPaymentData.transaction_status
        )
        expect(payment.amount).toEqual(testPaymentData.amount)
      })
  })

  it('/payment GETs all', () => {
    return request(app.getHttpServer())
      .get('/payment')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const payments = res.body
        expect(payments.length).toEqual(2)

        const payment = payments[1]
        expect(payment.id).toEqual(testPaymentData.id)
        expect(payment.user_id).toEqual(testPaymentData.user_id)
        expect(payment.payment_type_id).toEqual(testPaymentData.payment_type_id)
        expect(payment.stripe_id).toEqual(testPaymentData.stripe_id)
        expect(payment.created).toEqual(testPaymentData.created)
        expect(payment.payment_method).toEqual(testPaymentData.payment_method)
        expect(payment.receipt_url).toEqual(testPaymentData.receipt_url)
        expect(payment.transaction_status).toEqual(
          testPaymentData.transaction_status
        )
        expect(payment.amount).toEqual(testPaymentData.amount)
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/payment/id/x').expect(400)
  })
  it('/payment/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/payment/id/${testPaymentData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const payment = res.body

        expect(payment.id).toEqual(testPaymentData.id)
        expect(payment.user_id).toEqual(testPaymentData.user_id)
        expect(payment.payment_type_id).toEqual(testPaymentData.payment_type_id)
        expect(payment.stripe_id).toEqual(testPaymentData.stripe_id)
        expect(payment.created).toEqual(testPaymentData.created)
        expect(payment.payment_method).toEqual(testPaymentData.payment_method)
        expect(payment.receipt_url).toEqual(testPaymentData.receipt_url)
        expect(payment.transaction_status).toEqual(
          testPaymentData.transaction_status
        )
        expect(payment.amount).toEqual(testPaymentData.amount)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/payment/id/x').expect(400)
  })
  it('/payment/id/:id (PATCH)', () => {
    const updatedPaymentTypeId = 4

    return request(app.getHttpServer())
      .patch(`/payment/id/${testPaymentData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testPaymentData, payment_type_id: updatedPaymentTypeId })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const payment = res.body

        expect(payment.id).toEqual(testPaymentData.id)
        expect(payment.user_id).toEqual(testPaymentData.user_id)
        expect(payment.payment_type_id).toEqual(updatedPaymentTypeId)
        expect(payment.stripe_id).toEqual(testPaymentData.stripe_id)
        expect(payment.created).toEqual(testPaymentData.created)
        expect(payment.payment_method).toEqual(testPaymentData.payment_method)
        expect(payment.receipt_url).toEqual(testPaymentData.receipt_url)
        expect(payment.transaction_status).toEqual(
          testPaymentData.transaction_status
        )
        expect(payment.amount).toEqual(testPaymentData.amount)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/payment/id/x').expect(400)
  })
  it('/payment/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/payment/id/${testPaymentData.id}`)
      .expect(200)
  })
})
