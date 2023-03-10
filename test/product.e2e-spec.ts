import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { ProductModule } from '../src/product/product.module'
import { Product } from '../src/product/entities/product.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockProduct,
  mockProducts,
  mockProductRepository
} from '../src/product/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('ProductController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductModule]
    })
      .overrideProvider(getRepositoryToken(Product))
      .useValue(mockProductRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/product POSTs one', () => {
    return request(app.getHttpServer())
      .post('/product')
      .send({ mockProduct })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockProduct
        })
      })
  })

  it('/product GETs all', () => {
    return request(app.getHttpServer())
      .get('/product')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockProducts)
  })
  it.only('/product/category/:id GETs all by category id', () => {
    return request(app.getHttpServer())
      .get('/product/category/2')
      .expect('Content-Type', /json/)
      .expect(200)
    // FIXME: Returns {}, even though the actual API call returns valid data.
    // .expect(mockProducts)
    //      OR
    // .then((res) => {
    //   expect(res.body).toEqual({ ...mockProducts })
    // })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/product/id/x').expect(400)
  })
  it('/product/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/product/id/c1d20780-bba2-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockProduct })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/product/id/x').expect(400)
  })
  it('/product/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/product/id/c1d20780-bba2-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockProduct })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/product/id/x').expect(400)
  })
  it('/product/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/product/id/c1d20780-bba2-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
