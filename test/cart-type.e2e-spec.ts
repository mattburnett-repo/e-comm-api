import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { CartTypeModule } from '../src/cart-type/cart-type.module'
import { CartType } from '../src/cart-type/entities/cart-type.entity'
import { CreateCartTypeDto } from '../src/cart-type/dto/create-cart-type.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('CartTypeController (e2e)', () => {
  let app: INestApplication

  const mockCartType: CreateCartTypeDto = {
    id: 1,
    name: 'User',
    description: 'Typical user cart'
  }

  const mockCartTypes: CreateCartTypeDto[] = [
    {
      id: 1,
      name: 'User',
      description: 'Typical user cart'
    },
    {
      id: 2,
      name: 'Gift',
      description: 'Gift cart'
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockCartTypeRepository = {
    find: jest.fn().mockResolvedValue(mockCartTypes),
    findOneById: jest.fn().mockResolvedValue(mockCartType),
    create: jest.fn().mockResolvedValue(mockCartType),
    save: jest.fn().mockResolvedValue(mockCartType),
    update: jest.fn().mockResolvedValue(mockCartType),
    delete: jest.fn().mockResolvedValue(mockCartType),
    remove: jest.fn().mockResolvedValue(mockCartType)
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CartTypeModule]
    })
      .overrideProvider(getRepositoryToken(CartType))
      .useValue(mockCartTypeRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/cart-type GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart-type')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockCartTypes)
  })

  it('/cart-type POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart-type')
      .send({ mockCartType })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockCartType
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart-type/id/x').expect(400)
  })

  it('/cart-type/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/cart-type/id/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartType })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart-type/id/x').expect(400)
  })
  it('/cart-type/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/cart-type/id/2')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartType })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart-type/id/x').expect(400)
  })
  it('/cart-type/id/:id (DELETE)', () => {
    return request(app.getHttpServer()).delete('/cart-type/id/2').expect(200)
  })
})
