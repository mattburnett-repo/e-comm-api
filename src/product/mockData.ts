import { CreateProductDto } from './dto/create-product.dto'

export const mockProduct: CreateProductDto = {
  id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
  category_id: 2,
  name: 'Test Product One',
  description: 'Test Product One Description',
  imageUrl: 'https://example.com/image.png',
  price: 123.45
}
export const mockProducts: CreateProductDto[] = [
  {
    id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
    category_id: 2,
    name: 'Test Product One',
    description: 'Test Product One Description',
    imageUrl: 'https://example.com/image.png',
    price: 123.45
  },
  {
    id: 'd4b0b63a-bba2-11ed-afa1-0242ac120002',
    category_id: 2,
    name: 'Test Product Two',
    description: 'Test Product Two Description',
    imageUrl: 'https://example.com/image.png',
    price: 678.91
  }
]

export const testProductByCategoryData = {
  id: '3874ec46-bb6b-11ed-afa1-0242ac120002',
  name: 'Tesla Wall Connector',
  description:
    'This wall connector allows Tesla owners to charge their vehicles up to 44 miles of range per hour. It is sleek and durable, and can be installed both indoors and outdoors.',
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.w3eMyiDkJJxA0OMdHw_ZOwHaFj%26pid%3DApi&f=1&ipt=eb6ef2af9d0f98260e74759967e1da18bf42b24faed2016609abda48a8cd2c00&ipo=images',
  price: 500,
  category: { id: 2 }
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
  findOneById: jest.fn().mockResolvedValue(mockProduct),
  update: jest.fn().mockResolvedValue(mockProduct),
  delete: jest.fn().mockResolvedValue(mockProduct),
  remove: jest.fn().mockResolvedValue(mockProduct)
}

module.exports = {
  mockProduct: mockProduct,
  mockProducts: mockProducts,
  testProductByCategoryData: testProductByCategoryData,
  mockProductRepository: mockProductRepository,
  mockProductService: mockProductService
}
