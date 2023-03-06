import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { AddressModule } from '../src/address/address.module'
import { Address } from '../src/address/entities/address.entity'
import { CreateAddressDto } from '../src/address/dto/create-address.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('AddressController (e2e)', () => {
  let app: INestApplication

  const mockAddress: CreateAddressDto = {
    id: '1c027e94-d9dc-45f6-8661-7e26891aacd5',
    firstName: 'Jon',
    lastName: 'Snow',
    address_1: '123 Main Street',
    address_2: 'Apartment 9',
    city: 'New York',
    stateProvince: 'NY',
    postalCode: '10001',
    country: 'US'
  }

  const mockAddresses: CreateAddressDto[] = [
    {
      id: '1c027e94-d9dc-45f6-8661-7e26891aacd5',
      firstName: 'Jon',
      lastName: 'Snow',
      address_1: '123 Main Street',
      address_2: 'Apartment 9',
      city: 'New York',
      stateProvince: 'NY',
      postalCode: '10001',
      country: 'US'
    },
    {
      id: '961dc517-49a7-42af-9fbb-226a18138b6f',
      firstName: 'Jon 2',
      lastName: 'Snow 2',
      address_1: '123 Main Street 2',
      address_2: 'Apartment 9 2',
      city: 'New York 2',
      stateProvince: 'NY 2',
      postalCode: '10001 2',
      country: 'US 2 '
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockAddressRepository = {
    find: jest.fn().mockResolvedValue(mockAddresses),
    findOneById: jest.fn().mockResolvedValue(mockAddress),
    create: jest.fn().mockResolvedValue(mockAddress),
    save: jest.fn().mockResolvedValue(mockAddress),
    update: jest.fn().mockResolvedValue(mockAddress),
    delete: jest.fn().mockResolvedValue(mockAddress),
    remove: jest.fn().mockResolvedValue(mockAddress)
  }

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
