import { Module } from '@nestjs/common';
import { CartTypeService } from './cart-type.service';
import { CartTypeController } from './cart-type.controller';

@Module({
  controllers: [CartTypeController],
  providers: [CartTypeService]
})
export class CartTypeModule {}
