import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testUserData = {
  id: '4c02b8be-c099-11ed-afa1-0242ac120002',
  username: 'testUsername',
  email: 'test@user.com',
  password: 'password',
  firstName: 'testFirstName',
  lastName: 'testLastName',
  refreshToken: mockToken
}

describe('UserController (e2e)', () => {
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

  it('/user (POST)', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send(testUserData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const user = res.body

        expect(user).not.toBeUndefined()
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/user/id/1').expect(400)
  })
  it('/user/id/:id (GET)', () => {
    return request(app.getHttpServer())
      .get(`/user/id/${testUserData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const user = res.body

        expect(user).not.toBeUndefined()
        expect(user.address).not.toBeUndefined()
        expect(user.order).not.toBeUndefined()
        expect(user.cart).not.toBeUndefined()
        expect(user.payment).not.toBeUndefined()
      })
  })
  it('/user GETs all', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const users = res.body
        expect(users.length).toEqual(4)

        const user = users[3]
        expect(user).not.toBeUndefined()
        expect(user.address).not.toBeUndefined()
        expect(user.order).not.toBeUndefined()
        expect(user.cart).not.toBeUndefined()
        expect(user.payment).not.toBeUndefined()
      })
  })

  it('/user/username/:username (GET)', () => {
    return request(app.getHttpServer())
      .get(`/user/username/${testUserData.username}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const user = res.body

        expect(user).not.toBeUndefined()
        expect(user.address).not.toBeUndefined()
        expect(user.order).not.toBeUndefined()
        expect(user.cart).not.toBeUndefined()
        expect(user.payment).not.toBeUndefined()
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/user/id/x').expect(400)
  })
  it('/user/:id (PATCH', () => {
    const updatedUsername = 'updatedUsername'

    return request(app.getHttpServer())
      .patch(`/user/id/${testUserData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testUserData, username: updatedUsername })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const user = res.body

        expect(user).not.toBeUndefined()
        expect(user.address).not.toBeUndefined()
        expect(user.order).not.toBeUndefined()
        expect(user.cart).not.toBeUndefined()
        expect(user.payment).not.toBeUndefined()
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer())
      .delete('/user/id/1')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect(400)
  })
  it('/user/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/user/id/${testUserData.id}`)
      .expect(200)
  })
})
