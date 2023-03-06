import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { PaymentTypeModule } from '../src/payment-type/payment-type.module'
import { PaymentType } from '../src/payment-type/entities/payment-type.entity'
import { CreatePaymentTypeDto } from '../src/payment-type/dto/create-payment-type.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('PaymentTypeController (e2e)', () => {
  let app: INestApplication

  const mockPaymentType: CreatePaymentTypeDto = {
    id: 1,
    name: 'paypal',
    description: 'PayPal'
  }

  const mockPaymentTypes: CreatePaymentTypeDto[] = [
    {
      id: 1,
      name: 'paypal',
      description: 'PayPal'
    },
    {
      id: 2,
      name: 'masterCard',
      description: 'MasterCard'
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockPaymentTypeRepository = {
    find: jest.fn().mockResolvedValue(mockPaymentTypes),
    findOneById: jest.fn().mockResolvedValue(mockPaymentType),
    create: jest.fn().mockResolvedValue(mockPaymentType),
    save: jest.fn().mockResolvedValue(mockPaymentType),
    update: jest.fn().mockResolvedValue(mockPaymentType),
    delete: jest.fn().mockResolvedValue(mockPaymentType),
    remove: jest.fn().mockResolvedValue(mockPaymentType)
  }

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
