import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { PaymentModule } from '../src/payment/payment.module'
import { Payment } from '../src/payment/entities/payment.entity'
import { CreatePaymentDto } from '../src/payment/dto/create-payment.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('PaymentController (e2e)', () => {
  let app: INestApplication

  const mockPayment: CreatePaymentDto = {
    id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
    stripeId: 'stripeId-test-value',
    created: 12345,
    paymentMethod: 'test payment method',
    transactionState: 'test transaction state',
    amount: 123.45
  }

  const mockPayments: CreatePaymentDto[] = [
    {
      id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
      userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
      stripeId: 'stripeId-test-value',
      created: 12345,
      paymentMethod: 'test payment method',
      transactionState: 'test transaction state',
      amount: 123.45
    },
    {
      id: '6e9968e2-bb98-11ed-afa1-0242ac120002',
      userId: '964275ed-f9da-49b6-8fde-9da1d472197b',
      stripeId: 'stripeId-test-value',
      created: 12345,
      paymentMethod: 'test payment method',
      transactionState: 'test transaction state',
      amount: 123.45
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockPaymentRepository = {
    find: jest.fn().mockResolvedValue(mockPayments),
    findOneById: jest.fn().mockResolvedValue(mockPayment),
    create: jest.fn().mockResolvedValue(mockPayment),
    save: jest.fn().mockResolvedValue(mockPayment),
    update: jest.fn().mockResolvedValue(mockPayment),
    delete: jest.fn().mockResolvedValue(mockPayment),
    remove: jest.fn().mockResolvedValue(mockPayment)
  }

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
