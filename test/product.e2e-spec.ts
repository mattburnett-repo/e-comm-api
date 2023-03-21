import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testProductData = {
  id: 'caa7920a-c096-11ed-afa1-0242ac120002',
  category_id: 2,
  name: 'Test Product Name',
  description: 'Test Product Description',
  image_01_url: 'http://image.com',
  image_02_url: 'http://image.com',
  price: 123.45
}

import {
  testProductByCategoryData,
  testProductsBySubCategoryData
} from '../src/product/mockData'

describe('ProductController (e2e)', () => {
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

  it('/product POSTs one', () => {
    return request(app.getHttpServer())
      .post('/product')
      .send(testProductData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const product = res.body

        expect(product.id).toEqual(testProductData.id)
        expect(product.name).toEqual(testProductData.name)
        expect(product.description).toEqual(testProductData.description)
        expect(product.price).toEqual(testProductData.price)
        expect(product.image_01_url).toEqual(testProductData.image_01_url)
        expect(product.image_02_url).toEqual(testProductData.image_02_url)

        const categories = product.category
        expect(categories.length).toBeGreaterThan(0)

        const category = categories[0]
        expect(category.id).toEqual(testProductData.category_id)
      })
  })

  it('/product GETs all', () => {
    return request(app.getHttpServer())
      .get('/product')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const products = res.body
        expect(products.length).toEqual(26)

        const product = products[25]
        expect(product.id).toEqual(testProductData.id)
        expect(product.name).toEqual(testProductData.name)
        expect(product.description).toEqual(testProductData.description)
        expect(product.price).toEqual(testProductData.price)
        expect(product.image_01_url).toEqual(testProductData.image_01_url)
        expect(product.image_02_url).toEqual(testProductData.image_02_url)

        const categories = product.category
        expect(categories.length).toBeGreaterThan(0)

        const category = categories[0]
        expect(category.id).toEqual(testProductData.category_id)
      })
  })
  it('/product/category/:id GETs all by category id', () => {
    return request(app.getHttpServer())
      .get(`/product/category/id/2`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const products = res.body
        expect(products.length).toEqual(6)

        const product = products[0]
        expect(product.id).toEqual(testProductByCategoryData.id)
        expect(product.name).toEqual(testProductByCategoryData.name)
        expect(product.description).toEqual(
          testProductByCategoryData.description
        )
        expect(product.image_01_url).toEqual(
          testProductByCategoryData.image_01_url
        )
        expect(product.image_02_url).toEqual(
          testProductByCategoryData.image_02_url
        )

        expect(product.price).toEqual(testProductByCategoryData.price)

        const category = product.category[0]
        expect(category.id).toEqual(testProductByCategoryData.category.id)
      })
  })
  it('/product/sub-category/:code GETs all by sub category code', () => {
    const subCategory = 'trending'

    return request(app.getHttpServer())
      .get(`/product/sub-category/code/${subCategory}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const products = res.body

        expect(products.length).toEqual(3)

        const product = products[2]

        expect(product.id).toEqual(testProductsBySubCategoryData[2].id)
        expect(product.name).toEqual(testProductsBySubCategoryData[2].name)
        expect(product.description).toEqual(
          testProductsBySubCategoryData[2].description
        )
        expect(product.image_01_url).toEqual(
          testProductsBySubCategoryData[2].image_01_url
        )
        expect(product.image_02_url).toEqual(
          testProductsBySubCategoryData[2].image_02_url
        )

        expect(product.price).toEqual(testProductsBySubCategoryData[2].price)

        expect(product.subCategory[0].code).toEqual(subCategory)
      })
  })

  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/product/id/x').expect(400)
  })
  it('/product/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/product/id/${testProductData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const product = res.body

        expect(product.id).toEqual(testProductData.id)
        expect(product.name).toEqual(testProductData.name)
        expect(product.description).toEqual(testProductData.description)
        expect(product.price).toEqual(testProductData.price)
        expect(product.image_01_url).toEqual(testProductData.image_01_url)
        expect(product.image_02_url).toEqual(testProductData.image_02_url)

        const categories = product.category
        expect(categories.length).toBeGreaterThan(0)

        const category = categories[0]
        expect(category.id).toEqual(testProductData.category_id)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/product/id/x').expect(400)
  })
  it('/product/id/:id (PATCH)', () => {
    const updatedProductName = 'updated product name'

    return request(app.getHttpServer())
      .patch(`/product/id/${testProductData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testProductData, name: updatedProductName })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const product = res.body

        expect(product.id).toEqual(testProductData.id)
        expect(product.name).toEqual(updatedProductName)
        expect(product.description).toEqual(testProductData.description)
        expect(product.price).toEqual(testProductData.price)
        expect(product.image_01_url).toEqual(testProductData.image_01_url)
        expect(product.image_02_url).toEqual(testProductData.image_02_url)

        const categories = product.category
        expect(categories.length).toBeGreaterThan(0)

        const category = categories[0]
        expect(category.id).toEqual(testProductData.category_id)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/product/id/x').expect(400)
  })
  it('/product/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/product/id/${testProductData.id}`)
      .expect(200)
  })
})
