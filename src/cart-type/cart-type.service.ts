import { Injectable } from '@nestjs/common';
import { CreateCartTypeDto } from './dto/create-cart-type.dto';
import { UpdateCartTypeDto } from './dto/update-cart-type.dto';

@Injectable()
export class CartTypeService {
  create(createCartTypeDto: CreateCartTypeDto) {
    return 'This action adds a new cartType';
  }

  findAll() {
    return `This action returns all cartType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartType`;
  }

  update(id: number, updateCartTypeDto: UpdateCartTypeDto) {
    return `This action updates a #${id} cartType`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartType`;
  }
}
