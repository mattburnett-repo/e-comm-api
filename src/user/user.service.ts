import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  logger: Logger

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto)

    this.logger.log(`UserService created new user: ${newUser.id}`)
    return this.userRepository.save(newUser)
  }

  findAll(): Promise<User[]> {
    this.logger.log(`UserService findAll`)
    return this.userRepository.find({
      relations: ['address', 'cart', 'cart.cartItem', 'order', 'payment'],
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          user_id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          postalCode: true,
          country: true
        },
        cart: {
          id: true,
          user_id: true,
          name: true,
          description: true,
          cartItem: {
            id: true,
            product_id: true,
            productName: true,
            productQuantity: true,
            productPrice: true,
            lineItemTotalPrice: true
          }
        },
        order: {
          id: true,
          cart_id: true,
          user_id: true,
          order_date: true,
          total_price: true,
          payment_id: true
        },
        payment: {
          id: true,
          user_id: true,
          payment_type_id: true,
          transaction_status: true,
          amount: true
        }
      }
    })
  }

  findOneById(id: string): Promise<User> {
    this.logger.log(`UserService findById: ${id}`)

    return this.userRepository.findOne({
      where: {
        id: id
      },
      relations: ['address', 'cart', 'cart.cartItem', 'order', 'payment'],
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          user_id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          postalCode: true,
          country: true
        },
        cart: {
          id: true,
          user_id: true,
          name: true,
          description: true,
          cartItem: {
            id: true,
            product_id: true,
            productName: true,
            productQuantity: true,
            productPrice: true,
            lineItemTotalPrice: true
          }
        },
        order: {
          id: true,
          cart_id: true,
          user_id: true,
          order_date: true,
          total_price: true,
          payment_id: true
        },
        payment: {
          id: true,
          user_id: true,
          payment_type_id: true,
          transaction_status: true,
          amount: true
        }
      }
    })
  }

  findOneByUsername(username: string): Promise<User> {
    this.logger.log(`UserService findByUsername: ${username}`)
    return this.userRepository.findOne({
      where: {
        username
      },
      relations: ['address', 'cart', 'cart.cartItem', 'order', 'payment'],
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          user_id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          postalCode: true,
          country: true
        },
        cart: {
          id: true,
          user_id: true,
          name: true,
          description: true,
          cartItem: {
            id: true,
            product_id: true,
            productName: true,
            productQuantity: true,
            productPrice: true,
            lineItemTotalPrice: true
          }
        },
        order: {
          id: true,
          cart_id: true,
          user_id: true,
          order_date: true,
          total_price: true,
          payment_id: true
        },
        payment: {
          id: true,
          user_id: true,
          payment_type_id: true,
          transaction_status: true,
          amount: true
        }
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const theUser = await this.findOneById(id)

    this.logger.log(`UserService updates User: ${id}`)

    // https://stackoverflow.com/questions/47792808/typeorm-update-item-and-return-it
    return this.userRepository.save({
      ...theUser, // existing fields
      ...updateUserDto // updated fields
    })
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ExampleService deletes a User: ${id}`)

    return this.userRepository.remove(toDelete)
  }
}
