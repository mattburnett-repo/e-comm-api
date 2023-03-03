import { CreateCartDto } from './dto/create-cart.dto'

export const mockCart: CreateCartDto = {
  id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b',
  name: 'Test Cart Name',
  description: 'Test Cart Description'
}
export const mockCarts: CreateCartDto[] = [
  {
    id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b',
    name: 'Test Cart Name',
    description: 'Test Cart Description'
  },
  {
    id: '9442327e-bb7d-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b',
    name: 'Test Cart Name 2',
    description: 'Test Cart Description 2'
  }
]

export const mockCartRepository = {
  create: jest.fn().mockResolvedValue(mockCart),
  save: jest.fn().mockResolvedValue(mockCart),
  find: jest.fn().mockResolvedValue(mockCarts),
  findAll: jest.fn().mockResolvedValue(mockCarts),
  getProtected: jest.fn().mockImplementation(),
  findOne: jest.fn().mockResolvedValue(mockCart),
  update: jest.fn().mockResolvedValue({ ...mockCart }),
  remove: jest.fn().mockResolvedValue(mockCart),

  createQueryBuilder: jest.fn(() => ({
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    // setParameter: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(mockCart)
  }))
}

export const mockCartService = {
  create: jest.fn().mockResolvedValue(mockCart),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockCarts),
  findOneById: jest.fn().mockResolvedValue(mockCart),
  update: jest.fn().mockResolvedValue(mockCart),
  delete: jest.fn().mockResolvedValue(mockCart),
  remove: jest.fn().mockResolvedValue(mockCart)
}

module.exports = {
  mockCart: mockCart,
  mockCarts: mockCarts,
  mockCartRepository: mockCartRepository,
  mockCartService: mockCartService
}
