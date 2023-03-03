import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

import { CartItem } from '../../cart-item/entities/cart-item.entity'
import { Order } from '../../order/entities/order.entity'
import { User } from '../../user/entities/user.entity'
@Index('cart_pkey', ['id'], { unique: true })
@Entity('cart', { schema: 'public' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column({ nullable: false })
  @IsUUID()
  @IsNotEmpty()
  user_id: string

  @Column('character varying', {
    name: 'name',
    nullable: true,
    length: 150
  })
  @IsString()
  name: string | null

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 150
  })
  @IsString()
  description: string | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  // @ManyToMany(() => User, (user) => user.cart, { onDelete: 'CASCADE' })
  // user: User[]

  @ManyToOne(() => User, (user) => user.cart, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User[]

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, {
    onDelete: 'CASCADE'
  })
  cartItem: CartItem[]

  @ManyToMany(() => Order, (order) => order.cart)
  order: Order[]
}
