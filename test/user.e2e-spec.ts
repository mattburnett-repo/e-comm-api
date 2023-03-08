import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { UserModule } from '../src/user/user.module'
import { User } from '../src/user/entities/user.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import { mockUser, mockUsers, mockUserRepository } from '../src/user/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('UserController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule]
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockUserRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/user GETs all', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockUsers)
  })

  it('/user (POST)', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({ mockUser })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({ ...mockUser })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/user/id/1').expect(400)
  })
  it('/user/id/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockUser })
      })
  })

  it('/user/username/:username (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/username/test')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockUser })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/user/id/1').expect(400)
  })
  it('/user/:id (PATCH', () => {
    return request(app.getHttpServer())
      .patch('/user/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockUser })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/user/id/1').expect(400)
  })
  it('/user/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/user/id/1c027e94-d9dc-45f6-8661-7e26891aacd5')
      .expect(200)
  })
})
