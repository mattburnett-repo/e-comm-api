import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { AppModule } from '../src/app.module'

const testData = {
  id: '2e828168-bfd9-11ed-afa1-0242ac120002',
  firstName: 'Address',
  lastName: 'TestUser',
  address_1: 'testData address_1',
  address_2: 'testData address_2',
  city: 'testData city',
  stateProvince: 'testData stateProvince',
  postalCode: 'testData postalCode',
  country: 'testData country',
  user_id: 'cfad3828-bfdc-11ed-afa1-0242ac120002'
}

// from the test record we create in seedTables.ts
//    need this bc FK restraint when adding test address record
const mockUser = {
  id: 'cfad3828-bfdc-11ed-afa1-0242ac120002',
  username: 'AddressTestUser'
}

import { mockToken } from './mockData'

describe('AddressController (e2e)', () => {
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

  it('/address POSTs one', () => {
    return request(app.getHttpServer())
      .post('/address')
      .send(testData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const response = res.body

        expect(response.user_id).toEqual(testData.user_id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(testData.postalCode)
        expect(response.country).toEqual(testData.country)
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/address/id/x').expect(400)
  })

  it('/address/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/address/id/${testData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const response = res.body

        expect(response.id).toEqual(testData.id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(testData.postalCode)
        expect(response.country).toEqual(testData.country)

        const user = response.user
        expect(user.id).toEqual(mockUser.id)
        expect(user.username).toEqual(mockUser.username)
      })
  })
  it('/address/user-id/:id GETs one by user id', () => {
    return request(app.getHttpServer())
      .get(`/address/user-id/${testData.user_id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toBeDefined()
        const response = res.body[0]

        expect(response.id).toEqual(testData.id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(testData.postalCode)
        expect(response.country).toEqual(testData.country)

        const user = response.user
        expect(user.id).toEqual(mockUser.id)
        expect(user.username).toEqual(mockUser.username)
      })
  })

  it('GETs addresses by username', () => {
    return request(app.getHttpServer())
      .get(`/address/username/${mockUser.username}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const response = res.body[0]

        expect(response.id).toEqual(testData.id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(testData.postalCode)
        expect(response.country).toEqual(testData.country)

        const user = response.user
        expect(user.id).toEqual(mockUser.id)
        expect(user.username).toEqual(mockUser.username)
      })
  })

  it('/address GETs all', () => {
    return request(app.getHttpServer())
      .get('/address')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBeGreaterThanOrEqual(1)

        const response = res.body[1]

        expect(response.id).toEqual(testData.id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(testData.postalCode)
        expect(response.country).toEqual(testData.country)

        const user = response.user
        expect(user.id).toEqual(mockUser.id)
        expect(user.username).toEqual(mockUser.username)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/address/id/x').expect(400)
  })
  it('/address/id/:id (PATCH)', () => {
    const updatePostalCode = '54321'

    return request(app.getHttpServer())
      .patch(`/address/id/${testData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testData, postalCode: updatePostalCode })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const response = res.body
        expect(response.id).toEqual(testData.id)
        expect(response.firstName).toEqual(testData.firstName)
        expect(response.lastName).toEqual(testData.lastName)
        expect(response.address_1).toEqual(testData.address_1)
        expect(response.address_2).toEqual(testData.address_2)
        expect(response.city).toEqual(testData.city)
        expect(response.postalCode).toEqual(updatePostalCode)
        expect(response.country).toEqual(testData.country)

        const user = response.user
        expect(user.id).toEqual(mockUser.id)
        expect(user.username).toEqual(mockUser.username)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/address/id/x').expect(400)
  })
  it('/address/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/address/id/${testData.id}`)
      .expect(200)
  })
})
