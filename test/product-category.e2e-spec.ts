import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { ProductCategoryModule } from '../src/product-category/product-category.module'
import { ProductCategory } from '../src/product-category/entities/product-category.entity'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

import {
  mockProductCategory,
  mockProductCategories,
  mockProductCategoryRepository
} from '../src/product-category/mockData'
import { mockToken } from './mockData'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('ProductCategoryController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductCategoryModule]
    })
      .overrideProvider(getRepositoryToken(ProductCategory))
      .useValue(mockProductCategoryRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/product-category GETs all', () => {
    return request(app.getHttpServer())
      .get('/product-category')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockProductCategories)
  })

  it('/product-category POSTs one', () => {
    return request(app.getHttpServer())
      .post('/product-category')
      .send({ mockProductCategory })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockProductCategory
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer())
      .get('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/product-category/id/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockProductCategory })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer())
      .patch('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/product-category/id/2')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockProductCategory })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer())
      .delete('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/product-category/id/2')
      .expect(200)
  })
})
