import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm'

import { hash } from 'argon2'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

import { Order } from '../../order/entities/order.entity'
import { Address } from '../../address/entities/address.entity'
import { Cart } from '../../cart/entities/cart.entity'
import { Payment } from '../../payment/entities/payment.entity'
@Index('user_pkey', ['id'], { unique: true })
@Index('user_user_name_key', ['username'], { unique: true })
@Entity()
export class User {
  // hash the password before insert / update
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    // TODO: this needs a salt
    this.password = await hash(this.password)
  }

  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column({ unique: true, nullable: false })
  @IsNotEmpty()
  @IsString()
  username: string

  @Column({ unique: true, nullable: true })
  @IsString()
  email: string

  @Column({ nullable: false })
  @IsNotEmpty()
  @IsString()
  password: string

  @Column({ name: 'first_name', nullable: true })
  @IsString()
  firstName: string | null

  @Column({ name: 'last_name', nullable: true })
  @IsString()
  lastName: string | null

  @Column('character varying', {
    name: 'google_id',
    nullable: true,
    length: 100
  })
  googleId: string | null

  @Column('character varying', {
    name: 'google_display_name',
    nullable: true,
    length: 100
  })
  googleDisplayName: string | null

  @Column('character varying', {
    name: 'google_first_name',
    nullable: true,
    length: 100
  })
  googleFirstName: string | null

  @Column('character varying', {
    name: 'google_last_name',
    nullable: true,
    length: 100
  })
  googleLastName: string | null

  @Column('character varying', {
    name: 'google_image',
    nullable: true,
    length: 250
  })
  googleImage: string | null

  @Column({ nullable: true })
  refreshToken: string | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Cart, (cart) => cart.id, { onDelete: 'SET NULL' })
  @JoinTable({
    name: 'user_cart',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'cart_id',
      referencedColumnName: 'id'
    }
  })
  cart: Cart[]

  @ManyToMany(() => Order, (order) => order.id, { onDelete: 'SET NULL' })
  @JoinTable({
    name: 'user_order',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'order_id',
      referencedColumnName: 'id'
    }
  })
  order: Order[]

  @ManyToMany(() => Address, (address) => address.id, {
    onDelete: 'SET NULL'
  })
  @JoinTable({
    name: 'user_address',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'address_id',
      referencedColumnName: 'id'
    }
  })
  address: Address[]

  @OneToMany(() => Payment, (payment) => payment.userId, {
    onDelete: 'SET NULL'
  })
  payment: Payment[]
}
