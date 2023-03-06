import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'

import * as request from 'supertest'

import { CartItemModule } from '../src/cart-item/cart-item.module'
import { CartItem } from '../src/cart-item/entities/cart-item.entity'
import { CreateCartItemDto } from '../src/cart-item/dto/create-cart-item.dto'
import { AccessTokenGuard } from '../src/common/guards/accessToken.guard'

// https://www.youtube.com/watch?v=dXOfOgFFKuY&t=776s

describe('CartController (e2e)', () => {
  let app: INestApplication

  const mockCartItem: CreateCartItemDto = {
    id: 'fa482164- bb05 - 11ed-afa1 - 0242ac120002',
    cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
    productName: 'Test Product One',
    productQuantity: 5,
    productPrice: 10,
    lineItemTotalPrice: 50
  }

  const mockCartItems: CreateCartItemDto[] = [
    {
      id: 'fa482164- bb05 - 11ed-afa1 - 0242ac120002',
      cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
      productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
      productName: 'Test Product One',
      productQuantity: 5,
      productPrice: 10,
      lineItemTotalPrice: 50
    },
    {
      id: '84f165ac-bb86-11ed-afa1-0242ac120002',
      cartId: 'fad30dac-baf5-11ed-afa1-0242ac120002',
      productId: '6c480ae2-bb04-11ed-afa1-0242ac120002',
      productName: 'Test Product Two',
      productQuantity: 10,
      productPrice: 20,
      lineItemTotalPrice: 100
    }
  ]

  const mockToken =
    'kkVMx5bUz7c4xcQe4yUid+nzcJmuhQYJcAuZrsjG1uvr+aN0Y1kL5nSs+jiYtQXIEpJs5WAlMUZW+xxj8QMVwQ=='

  const mockCartItemRepository = {
    find: jest.fn().mockResolvedValue(mockCartItems),
    findOneById: jest.fn().mockResolvedValue(mockCartItem),
    create: jest.fn().mockResolvedValue(mockCartItem),
    save: jest.fn().mockResolvedValue(mockCartItem),
    update: jest.fn().mockResolvedValue(mockCartItem),
    delete: jest.fn().mockResolvedValue(mockCartItem),
    remove: jest.fn().mockResolvedValue(mockCartItem)
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CartItemModule]
    })
      .overrideProvider(getRepositoryToken(CartItem))
      .useValue(mockCartItemRepository)
      .overrideGuard(AccessTokenGuard)
      .useValue(mockToken)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    await app.close()
  })

  it('/cart-item GETs all', () => {
    return request(app.getHttpServer())
      .get('/cart-item')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockCartItems)
  })

  it('/cart-item POSTs one', () => {
    return request(app.getHttpServer())
      .post('/cart-item')
      .send({ mockCartItem })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual({
          ...mockCartItem
        })
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/cart-item/id/x').expect(400)
  })
  it('/cart-item/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartItem })
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/cart-item/id/x').expect(400)
  })
  it('/cart/id/:id (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .set('Authorization', `Bearer ${mockToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ ...mockCartItem })
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/cart-item/id/x').expect(400)
  })
  it('/cart/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/cart-item/id/fad30dac-baf5-11ed-afa1-0242ac120002')
      .expect(200)
  })
})
