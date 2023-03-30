import { CreateOrderDto } from './dto/create-order.dto'
import { mockCartItems } from '../cart-item/mockData'

export const mockOrder: CreateOrderDto = {
  id: '1882376c-bafe-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  stripe_id:
    'cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc',
  order_date: new Date(),
  tax: 1.23,
  total_price: 3.45,
  payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockStripeSessionOrder: CreateOrderDto = {
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  id: '1882376c-bafe-11ed-afa1-0242ac120002',
  order_date: new Date(),
  payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  stripe_id:
    'cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc',
  tax: 1.23,
  total_price: 3.45,
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockOrders: CreateOrderDto[] = [
  {
    id: '1882376c-bafe-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    stripe_id:
      'cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc',
    order_date: new Date(),
    tax: 1.23,
    total_price: 3.45,
    payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
  },
  {
    id: '5a1513a6-bb95-11ed-afa1-0242ac120002',
    cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
    stripe_id:
      'cs_test_a1prX2Jnwzbiqtj0DtwH6rv5YUENHyJtljZxATfJnTeWrXhbVSJoUg8HVc',
    order_date: new Date(),
    tax: 4.56,
    total_price: 5.67,
    payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
    user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
  }
]

export const testOrderData = {
  id: '7050c680-c075-11ed-afa1-0242ac120002',
  cart_id: 'fad30dac-baf5-11ed-afa1-0242ac120002',
  tax: 1.23,
  total_price: 4.56,
  payment_id: 'cfdd4196-bb02-11ed-afa1-0242ac120002',
  user_id: '964275ed-f9da-49b6-8fde-9da1d472197b'
}

export const mockStripeOrder = {
  cartItems: mockCartItems
}

export const mockStripeCustomer = {
  object: 'list',
  data: [
    {
      id: 'cus_Nb5YFlHGAxBsJz',
      object: 'customer',
      address: null,
      balance: 0,
      created: 1679836367,
      currency: null,
      default_source: null,
      delinquent: false,
      description: 'Test customer',
      discount: null,
      email: 'test@customer.com',
      invoice_prefix: 'AE6D972B',
      invoice_settings: {
        custom_fields: null,
        default_payment_method: null,
        footer: null,
        rendering_options: null
      },
      livemode: false,
      metadata: {},
      name: 'Test Customer',
      phone: null,
      preferred_locales: [],
      shipping: {
        address: {
          city: '',
          country: '',
          line1: '',
          line2: '',
          postal_code: '',
          state: ''
        },
        name: 'Test Customer',
        phone: ''
      },
      tax_exempt: 'none',
      test_clock: null
    }
  ],
  has_more: false,
  url: '/v1/customers'
}

export const mockOrderRepository = {
  create: jest.fn().mockResolvedValue(mockOrder),
  createStripeOrder: jest.fn().mockResolvedValue(mockStripeOrder),
  listCustomers: jest.fn().mockResolvedValue(mockStripeCustomer),
  save: jest.fn().mockResolvedValue(mockOrder),
  find: jest.fn().mockResolvedValue(mockOrders),
  findOne: jest.fn().mockResolvedValue(mockOrder),
  findAll: jest.fn().mockResolvedValue(mockOrders),
  getProtected: jest.fn().mockImplementation(),
  findOneById: jest.fn().mockResolvedValue(mockOrder),
  update: jest.fn().mockResolvedValue({ ...mockOrder }),
  remove: jest.fn().mockResolvedValue(mockOrder)
}

export const mockOrderService = {
  create: jest.fn().mockResolvedValue(mockOrder),
  createStripeOrder: jest.fn().mockResolvedValue(mockStripeOrder),
  listCustomers: jest.fn().mockResolvedValue(mockStripeCustomer),
  getProtected: jest
    .fn()
    .mockImplementation(() => 'This is a protected resource'),
  findAll: jest.fn().mockResolvedValue(mockOrders),
  findOneById: jest.fn().mockResolvedValue(mockOrder),
  update: jest.fn().mockResolvedValue(mockOrder),
  delete: jest.fn().mockResolvedValue(mockOrder),
  remove: jest.fn().mockResolvedValue(mockOrder)
}

module.exports = {
  mockOrder: mockOrder,
  mockOrders: mockOrders,
  testOrderData: testOrderData,
  mockStripeOrder: mockStripeOrder,
  mockStripeSessionOrder: mockStripeSessionOrder,
  mockStripeCustomer: mockStripeCustomer,
  mockOrderRepository: mockOrderRepository,
  mockOrderService: mockOrderService
}
