import { CreateProductDto } from './dto/create-product.dto'

export const mockProduct: CreateProductDto = {
  id: 'c1d20780-bba2-11ed-afa1-0242ac120002',
  name: 'Test Product One',
  description: 'Test Product One Description',
  imageUrl: 'https://example.com/image.png',
  price: 123.45
}
export const mockProducts: CreateProductDto[] = [
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

export const mockProductRepository = {
  create: jest.fn().mockResolvedValue(mockProduct),
  save: jest.fn().mockResolvedValue(mockProduct),
  find: jest.fn().mockResolvedValue(mockProducts),
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
  mockProductRepository: mockProductRepository,
  mockProductService: mockProductService
}
