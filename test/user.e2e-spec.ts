import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { UserModule } from '../src/user/user.module'
import { User } from '../src/user/entities/user.entity'
import { CreateUserDto } from '../src/user/dto/create-user.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('UserController (e2e)', () => {
  let app: INestApplication

  const mockUser: CreateUserDto = {
    id: '1c027e94-d9dc-45f6-8661-7e26891aacd5',
    username: 'test',
    email: 'efpyi@example.com',
    password: '123456',
    firstName: 'test',
    lastName: 'test',
    refreshToken: '123456'
  }

  const mockUsers: CreateUserDto[] = [
    {
      id: '1c027e94-d9dc-45f6-8661-7e26891aacd5',
      username: 'test1',
      email: 'efpyi@example.com',
      password: '123456',
      firstName: 'test',
      lastName: 'test',
      refreshToken: '123456'
    },
    {
      id: '961dc517-49a7-42af-9fbb-226a18138b6f',
      username: 'test2',
      email: 'efpyi@example.com',
      password: '123456',
      firstName: 'test',
      lastName: 'test',
      refreshToken: '123456'
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockUsersRepository = {
    find: jest.fn().mockResolvedValue(mockUsers),
    findOne: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockResolvedValue(mockUser),
    save: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue(mockUser),
    remove: jest.fn().mockResolvedValue(mockUser)
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule]
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockUsersRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockUsers)
  })

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({ mockUser })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockUser
        })
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
