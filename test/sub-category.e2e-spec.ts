import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'

import * as request from 'supertest'

import { mockToken } from './mockData'
import { AppModule } from '../src/app.module'

const testSubCategoryData = {
  id: 4,
  code: 'testSubCategoryCode',
  description: 'testSubCategoryDescription'
}

describe('SubCategoryController (e2e)', () => {
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

  it('/sub-category POSTs one', () => {
    return request(app.getHttpServer())
      .post('/sub-category')
      .send(testSubCategoryData)
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        const subCategory = res.body

        expect(subCategory.id).toEqual(testSubCategoryData.id)
        expect(subCategory.code).toEqual(testSubCategoryData.code)
        expect(subCategory.description).toEqual(testSubCategoryData.description)
      })
  })

  it('/sub-category GETs all', () => {
    return request(app.getHttpServer())
      .get('/sub-category')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const productCategories = res.body
        expect(productCategories.length).toEqual(4)

        const subCategory = productCategories[3]
        expect(subCategory.id).toEqual(testSubCategoryData.id)
        expect(subCategory.code).toEqual(testSubCategoryData.code)
        expect(subCategory.description).toEqual(testSubCategoryData.description)
      })
  })
  it('GET handles a bad id value', () => {
    return request(app.getHttpServer()).get('/sub-category/id/x').expect(400)
  })
  it('/sub-category/id/:id GETs one by id', () => {
    return request(app.getHttpServer())
      .get(`/sub-category/id/${testSubCategoryData.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const subCategory = res.body

        expect(subCategory.id).toEqual(testSubCategoryData.id)
        expect(subCategory.code).toEqual(testSubCategoryData.code)
        expect(subCategory.description).toEqual(testSubCategoryData.description)
      })
  })

  it('PATCH handles a bad id value', () => {
    return request(app.getHttpServer()).patch('/sub-category/id/x').expect(400)
  })
  it('/sub-category/id/:id (PATCH)', () => {
    const updatedCodeValue = 'test updated code value'

    return request(app.getHttpServer())
      .patch(`/sub-category/id/${testSubCategoryData.id}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .send({ ...testSubCategoryData, code: updatedCodeValue })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const subCategory = res.body

        expect(subCategory.id).toEqual(testSubCategoryData.id)
        expect(subCategory.code).toEqual(updatedCodeValue)
        expect(subCategory.description).toEqual(testSubCategoryData.description)
      })
  })

  it('DELETE handles a bad id value', () => {
    return request(app.getHttpServer()).delete('/sub-category/id/x').expect(400)
  })
  it('/sub-category/id/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/sub-category/id/${testSubCategoryData.id}`)
      .expect(200)
  })
})
