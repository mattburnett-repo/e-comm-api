import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testProductCategoryData = {
  id: 6,
  name: 'testProductCategoryName',
  description: 'testProductCategoryDescription'
}

describe('ProductCategoryController (e2e)', () => {
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

  it('/product-category POSTs one', () => {
    return request(app.getHttpServer())
      .post('/product-category')
      .send(testProductCategoryData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const productCategory = res.body

        expect(productCategory.id).toEqual(testProductCategoryData.id)
        expect(productCategory.name).toEqual(testProductCategoryData.name)
        expect(productCategory.description).toEqual(
          testProductCategoryData.description
        )
      })
  })

  it('/product-category GETs all', () => {
    return request(app.getHttpServer())
      .get('/product-category')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const productCategories = res.body
        expect(productCategories.length).toEqual(6)

        const productCategory = productCategories[5]
        expect(productCategory.id).toEqual(testProductCategoryData.id)
        expect(productCategory.name).toEqual(testProductCategoryData.name)
        expect(productCategory.description).toEqual(
          testProductCategoryData.description
        )
      })
  })
  it('GET handles a bad id value', () => {
    return request(app.getHttpServer())
      .get('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/product-category/id/${testProductCategoryData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const productCategory = res.body

        expect(productCategory.id).toEqual(testProductCategoryData.id)
        expect(productCategory.name).toEqual(testProductCategoryData.name)
        expect(productCategory.description).toEqual(
          testProductCategoryData.description
        )
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer())
      .patch('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id (PATCH)', () => {
    const updatedNameValue = 'test updated name value'

    return request(app.getHttpServer())
      .patch(`/product-category/id/${testProductCategoryData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testProductCategoryData, name: updatedNameValue })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const productCategory = res.body

        expect(productCategory.id).toEqual(testProductCategoryData.id)
        expect(productCategory.name).toEqual(updatedNameValue)
        expect(productCategory.description).toEqual(
          testProductCategoryData.description
        )
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer())
      .delete('/product-category/id/x')
      .expect(400)
  })
  it('/product-category/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/product-category/id/${testProductCategoryData.id}`)
      .expect(200)
  })
})
