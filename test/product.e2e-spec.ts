import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { ProductModule } from '../src/product/product.module'
import { Product } from '../src/product/entities/product.entity'
import { CreateProductDto } from '../src/product/dto/create-product.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('ProductController (e2e)', () => {
  let app: INestApplication

  const mockProduct: CreateProductDto = {
    id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
    name: 'Test Product One',
    description: 'Test Product One Description',
    imageUrl: 'https://example.com/image.png',
    price: 123.45
  }

  const mockProducts: CreateProductDto[] = [
    {
      id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
      name: 'Test Product One',
      description: 'Test Product One Description',
      imageUrl: 'https://example.com/image.png',
      price: 123.45
    },
    {
      id: 'd4b0b63a-bba2-11ed-afa1-0242ac120002',
      name: 'Test Product Two',
      description: 'Test Product Two Description',
      imageUrl: 'https://example.com/image.png',
      price: 678.91
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockProductRepository = {
    find: jest.fn().mockResolvedValue(mockProducts),
    findOneById: jest.fn().mockResolvedValue(mockProduct),
    create: jest.fn().mockResolvedValue(mockProduct),
    save: jest.fn().mockResolvedValue(mockProduct),
    update: jest.fn().mockResolvedValue(mockProduct),
    delete: jest.fn().mockResolvedValue(mockProduct),
    remove: jest.fn().mockResolvedValue(mockProduct)
  }

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

  it('/product GETs all', () => {
    return request(app.getHttpServer())
      .get('/product')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockProducts)
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
