import { CreateProductDto } from './dto/create-product.dto'

export const mockProduct: CreateProductDto = {
  id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
  category_id: 2,
  name: 'Test Product One',
  description: 'Test Product One Description',
  image_01_url: 'https://example.com/image.png',
  image_02_url: 'https://example.com/image.png',
  price: 123.45
}
export const mockProducts: CreateProductDto[] = [
  {
    id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
    category_id: 2,
    name: 'Test Product One',
    description: 'Test Product One Description',
    image_01_url: 'https://example.com/image.png',
    image_02_url: 'https://example.com/image.png',
    price: 123.45
  },
  {
    id: 'd4b0b63a-bba2-11ed-afa1-0242ac120002',
    category_id: 2,
    name: 'Test Product Two',
    description: 'Test Product Two Description',
    image_01_url: 'https://example.com/image.png',
    image_02_url: 'https://example.com/image.png',
    price: 678.91
  }
]

export const testProductByCategoryData = {
  id: '3874ec46-bb6b-11ed-afa1-0242ac120002',
  name: 'Tesla Wall Connector',
  description:
    'This wall connector allows Tesla owners to charge their vehicles up to 44 miles of range per hour. It is sleek and durable, and can be installed both indoors and outdoors.',
  image_01_url:
    'https://www.tesla.com/sites/default/files/support/charging/GEN%203%20WALL%20CONNECTOR%20COVER_v1%5B1%5D.png',
  image_02_url:
    'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg',
  price: 500,
  category: { id: 2 }
}
export const testProductsBySubCategoryData = [
  {
    id: '6c480ae2-bb04-11ed-afa1-0242ac120002',
    name: 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit',
    description:
      'This kit includes a 100W solar panel, 30A PWM negative ground charge controller, and mounting brackets. It is designed for off-grid applications and can be used to power small appliances and electronics.',
    image_01_url:
      'https://cdn11.bigcommerce.com/s-fhnch/images/stencil/1280w/products/945/21493/RNG-KIT-STARTER100D-WND30-G3_01_2__81067.1677859661.jpg?c=2',
    image_02_url:
      'https://cdn11.bigcommerce.com/s-fhnch/images/stencil/320w/products/945/21489/RNG-KIT-STARTER100D-WND30-G3_03__59684.1677859661.jpg?c=2',
    price: 189.99
  },
  {
    id: '3874ec46-bb6b-11ed-afa1-0242ac120002',
    name: 'Tesla Wall Connector',
    description:
      'This wall connector allows Tesla owners to charge their vehicles up to 44 miles of range per hour. It is sleek and durable, and can be installed both indoors and outdoors.',
    image_01_url:
      'https://www.tesla.com/sites/default/files/support/charging/GEN%203%20WALL%20CONNECTOR%20COVER_v1%5B1%5D.png',
    image_02_url:
      'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg',
    price: 500
  },
  {
    id: '2c47ed7c-bb6d-11ed-afa1-0242ac120002',
    name: 'Biodegradable Mailer Bags',
    description:
      'These mailer bags are made of 100% compostable and biodegradable materials, such as corn starch and PBAT. They are durable and water-resistant, and are suitable for shipping products of various sizes.',
    image_01_url:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41J7xCzaHfL._AC_.jpg',
    image_02_url:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31dgp1rVj9L._AC_.jpg',
    price: 24.99
  }
]
export const testProductBySubCategoryData = {
  id: '2c47ed7c-bb6d-11ed-afa1-0242ac120002',
  name: 'Biodegradable Mailer Bags',
  description:
    'These mailer bags are made of 100% compostable and biodegradable materials, such as corn starch and PBAT. They are durable and water-resistant, and are suitable for shipping products of various sizes.',
  image_01_url:
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41J7xCzaHfL._AC_.jpg',
  image_02_url:
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31dgp1rVj9L._AC_.jpg',
  price: 24.99
}

export const mockProductRepository = {
  create: jest.fn().mockResolvedValue(mockProduct),
  save: jest.fn().mockResolvedValue(mockProduct),
  find: jest.fn().mockResolvedValue(mockProducts),
  findOne: jest.fn().mockResolvedValue(mockProduct),
  findAll: jest.fn().mockResolvedValue(mockProducts),
  findAllByCategoryId: jest.fn().mockResolvedValue(mockProducts),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockProduct),
  findAllBySubCategoryCode: jest.fn().mockResolvedValue(mockProducts),
  update: jest.fn().mockResolvedValue({ ...mockProduct }),
  remove: jest.fn().mockResolvedValue(mockProduct),

  // mock junction table query functions
  createQueryBuilder: jest.fn(() => ({
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    // setParameter: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockReturnThis()
    // getMany: jest.fn().mockResolvedValue(mockProducts)
  }))
}

export const mockProductService = {
  create: jest.fn().mockResolvedValue(mockProduct),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockProducts),
  findAllByCategoryId: jest.fn().mockResolvedValue(mockProducts),
  findAllBySubCategoryCode: jest.fn().mockResolvedValue(mockProducts),
  findOneById: jest.fn().mockResolvedValue(mockProduct),
  update: jest.fn().mockResolvedValue(mockProduct),
  delete: jest.fn().mockResolvedValue(mockProduct),
  remove: jest.fn().mockResolvedValue(mockProduct)
}

module.exports = {
  mockProduct: mockProduct,
  mockProducts: mockProducts,
  testProductByCategoryData: testProductByCategoryData,
  testProductsBySubCategoryData: testProductsBySubCategoryData,
  testProductBySubCategoryData: testProductBySubCategoryData,
  mockProductRepository: mockProductRepository,
  mockProductService: mockProductService
}
