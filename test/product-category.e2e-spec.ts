import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { ProductCategoryModule } from '../src/product-category/product-category.module'
import { ProductCategory } from '../src/product-category/entities/product-category.entity'
import { CreateProductCategoryDto } from '../src/product-category/dto/create-product-category.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('ProductCategoryController (e2e)', () => {
  let app: INestApplication

  const mockProductCategory: CreateProductCategoryDto = {
    id: 1,
    name: 'Test Product Category One Name',
    description: 'Test Product Category One Description'
  }

  const mockProductCategories: CreateProductCategoryDto[] = [
    {
      id: 1,
      name: 'Test Product Category One Name',
      description: 'Test Product Category One Description'
    },
    {
      id: 2,
      name: 'Test Product Category Two Name',
      description: 'Test Product Category Two Description'
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockProductCategoryRepository = {
    find: jest.fn().mockResolvedValue(mockProductCategories),
    findOneById: jest.fn().mockResolvedValue(mockProductCategory),
    create: jest.fn().mockResolvedValue(mockProductCategory),
    save: jest.fn().mockResolvedValue(mockProductCategory),
    update: jest.fn().mockResolvedValue(mockProductCategory),
    delete: jest.fn().mockResolvedValue(mockProductCategory),
    remove: jest.fn().mockResolvedValue(mockProductCategory)
  }

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
