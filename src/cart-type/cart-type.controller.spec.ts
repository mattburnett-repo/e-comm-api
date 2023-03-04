import { Test, TestingModule } from '@nestjs/testing';
import { CartTypeController } from './cart-type.controller';
import { CartTypeService } from './cart-type.service';

describe('CartTypeController', () => {
  let controller: CartTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartTypeController],
      providers: [CartTypeService],
    }).compile();

    controller = module.get<CartTypeController>(CartTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
