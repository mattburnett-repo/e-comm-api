import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

import { CartItem } from '../../cart-item/entities/cart-item.entity'
import { Order } from '../../order/entities/order.entity'
import { CartType } from '../../cart-type/entities/cart-type.entity'
@Index('cart_pkey', ['id'], { unique: true })
@Entity('cart', { schema: 'public' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

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

  @Column('date', {
    name: 'order_date',
    nullable: true,
    default: () => 'CURRENT_DATE'
  })
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, {
    onDelete: 'SET NULL'
  })
  cartItem: CartItem[]

  @ManyToMany(() => CartType, (cartType) => cartType.cart, {
    onDelete: 'SET NULL'
  })
  cartType: CartType[]

  @ManyToMany(() => Order, (order) => order.cart, { onDelete: 'SET NULL' })
  order: Order[]
}
