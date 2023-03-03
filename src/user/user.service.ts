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
      order: {
        created_at: 'ASC'
      },
      relations: ['address', 'order', 'cart', 'payment'],
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          stateProvince: true,
          postalCode: true,
          country: true
        },
        order: {
          id: true,
          order_date: true,
          total_price: true
        },
        cart: {
          id: true,
          name: true
        },
        payment: {
          id: true,
          created: true,
          payment_type_id: true,
          stripe_id: true,
          transaction_status: true
        }
      }
    })
  }

  findOneById(id: string): Promise<User> {
    this.logger.log(`UserService findById: ${id}`)
    return this.userRepository.findOne({
      where: { id },
      relations: ['address', 'order', 'cart', 'payment'],
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          stateProvince: true,
          postalCode: true,
          country: true
        },
        order: {
          id: true,
          order_date: true,
          total_price: true
        },
        cart: {
          id: true,
          name: true
        },
        payment: {
          id: true,
          created: true,
          payment_type_id: true,
          stripe_id: true,
          transaction_status: true
        }
      }
    })
  }

  findOneByUsername(username: string): Promise<User> {
    this.logger.log(`UserService findByUsername: ${username}`)
    return this.userRepository.findOne({
      where: { username },
      relations: ['address', 'order', 'cart', 'payment'],
      select: {
        id: true,
        username: true,
        password: true,
        email: true,
        firstName: true,
        lastName: true,
        refreshToken: true,
        address: {
          id: true,
          firstName: true,
          lastName: true,
          address_1: true,
          address_2: true,
          city: true,
          stateProvince: true,
          postalCode: true,
          country: true
        },
        order: {
          id: true,
          order_date: true,
          total_price: true
        },
        cart: {
          id: true,
          name: true
        },
        payment: {
          id: true,
          created: true,
          payment_type_id: true,
          stripe_id: true,
          transaction_status: true
        }
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.log(`UserService updates User: ${id}`)

    const theUser = await this.findOneById(id)

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
