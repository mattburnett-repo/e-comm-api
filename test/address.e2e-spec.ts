import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { AddressModule } from '../src/address/address.module'
import { Address } from '../src/address/entities/address.entity'

import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockAddress,
  mockAddresses,
  mockAddressRepository
} from '../src/address/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('AddressController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AddressModule]
    })
      .overrideProvider(getRepositoryToken(Address))
      .useValue(mockAddressRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/address GETs all', () => {
    return request(app.getHttpServer())
      .get('/address')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockAddresses)
  })

  it('/address POSTs one', () => {
    return request(app.getHttpServer())
      .post('/address')
      .send({ mockAddress })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockAddress
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/address/id/x').expect(400)
  })
  it('/address/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/address/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockAddress })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/address/id/x').expect(400)
  })
  it('/address/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/address/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockAddress })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/address/id/x').expect(400)
  })
  it('/address/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/address/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .expect(200)
  })
})
