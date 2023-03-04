import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { IsNotEmpty, IsString, IsDate, IsUUID } from 'class-validator'

import { CartItem } from '../../cart-item/entities/cart-item.entity'
import { Order } from '../../order/entities/order.entity'
import { CartType } from '../../cart-type/entities/cart-type.entity'
import { User } from '../../user/entities/user.entity'
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
  @IsDate()
  orderDate: Date | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => CartItem, (cartItem) => cartItem.cartId, {
    onDelete: 'SET NULL'
  })
  cartItem: CartItem[]

  @ManyToMany(() => CartType, (cartType) => cartType.id, {
    onDelete: 'SET NULL'
  })
  @JoinTable({
    name: 'cart_cart_type',
    joinColumn: {
      name: 'cart_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'cart_type_id',
      referencedColumnName: 'id'
    }
  })
  cartType: CartType[]

  @OneToMany(() => Order, (order) => order.id, { onDelete: 'SET NULL' })
  order: Order[]
}
