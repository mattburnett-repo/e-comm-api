import { CreateCartItemDto } from './dto/create-cart-item.dto'

export const mockCartItem: CreateCartItemDto = {
  id: 'fa482164-bb05-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  product_id: '6c480ae2-bb04-11ed-afa1-0242ac120002',
  productName: 'Test Product One',
  productQuantity: 5,
  productPrice: 10,
  lineItemTotalPrice: 50
}

export const mockCartItems: CreateCartItemDto[] = [
  {
    id: 'fa482164-bb05-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    product_id: '6c480ae2-bb04-11ed-afa1-0242ac120002',
    productName: 'Test Product One',
    productQuantity: 5,
    productPrice: 10,
    lineItemTotalPrice: 50
  },
  {
    id: '84f165ac-bb86-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    product_id: '6c480ae2-bb04-11ed-afa1-0242ac120002',
    productName: 'Test Product Two',
    productQuantity: 10,
    productPrice: 20,
    lineItemTotalPrice: 100
  }
]

export const mockCartItemRepository = {
  create: jest.fn().mockResolvedValue(mockCartItem),
  save: jest.fn().mockResolvedValue(mockCartItem),
  find: jest.fn().mockResolvedValue(mockCartItems),
  findAll: jest.fn().mockResolvedValue(mockCartItems),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockCartItem),
  update: jest.fn().mockResolvedValue({ ...mockCartItem }),
  remove: jest.fn().mockResolvedValue(mockCartItem),

  createQueryBuilder: jest.fn(() => ({
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    // setParameter: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(mockCartItem)
  }))
}

export const mockCartItemService = {
  create: jest.fn().mockResolvedValue(mockCartItem),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockCartItems),
  findOneById: jest.fn().mockResolvedValue(mockCartItem),
  update: jest.fn().mockResolvedValue(mockCartItem),
  delete: jest.fn().mockResolvedValue(mockCartItem),
  remove: jest.fn().mockResolvedValue(mockCartItem)
}

module.exports = {
  mockCartItem: mockCartItem,
  mockCartItems: mockCartItems,
  mockCartItemRepository: mockCartItemRepository,
  mockCartItemService: mockCartItemService
}
