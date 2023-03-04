import { Test, TestingModule } from '@nestjs/testing';
import { CartTypeService } from './cart-type.service';

describe('CartTypeService', () => {
  let service: CartTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartTypeService],
    }).compile();

    service = module.get<CartTypeService>(CartTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
