import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { CartModule } from '../src/cart/cart.module'
import { Cart } from '../src/cart/entities/cart.entity'
import { CreateCartDto } from '../src/cart/dto/create-cart.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('CartController (e2e)', () => {
  let app: INestApplication

  const mockCart: CreateCartDto = {
    id: 'fad30dac- baf5 - 11ed-afa1 - 0242ac120002',
    name: 'Test Cart Name',
    description: 'Test Cart Description'
  }

  const mockCarts: CreateCartDto[] = [
    {
      id: 'fad30dac- baf5 - 11ed-afa1 - 0242ac120002',
      name: 'Test Cart Name',
      description: 'Test Cart Description'
    },
    {
      id: '9442327e-bb7d-11ed-afa1-0242ac120002',
      name: 'Test Cart Name 2',
      description: 'Test Cart Description 2'
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockCartRepository = {
    find: jest.fn().mockResolvedValue(mockCarts),
    findOneById: jest.fn().mockResolvedValue(mockCart),
    create: jest.fn().mockResolvedValue(mockCart),
    save: jest.fn().mockResolvedValue(mockCart),
    update: jest.fn().mockResolvedValue(mockCart),
    delete: jest.fn().mockResolvedValue(mockCart),
    remove: jest.fn().mockResolvedValue(mockCart)
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CartModule]
    })
      .overrideProvider(getRepositoryToken(Cart))
      .useValue(mockCartRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/cart GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockCarts)
  })

  it('/cart POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart')
      .send({ mockCart })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockCart
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart/id/x').expect(400)
  })
  it('/cart/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCart })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart/id/x').expect(400)
  })
  it('/cart/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCart })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart/id/x').expect(400)
  })
  it('/cart/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/cart/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
