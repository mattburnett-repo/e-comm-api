import { IsUUID, IsNotEmpty } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import { Cart } from '../../cart/entities/cart.entity'
import { User } from '../../user/entities/user.entity'

@Index('order_pkey', ['id'], { unique: true })
@Entity('order', { schema: 'public' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('date', {
    name: 'order_date',
    nullable: true,
    default: () => 'CURRENT_DATE'
  })
  orderDate: Date | null

  @Column('numeric', {
    name: 'tax',
    nullable: true,
    precision: 6,
    scale: 2
  })
  tax: number | null

  @Column('numeric', {
    name: 'total_price',
    nullable: true,
    precision: 6,
    scale: 2
  })
  totalPrice: number | null

  @Column('integer', { name: 'payment_id', nullable: true })
  paymentId: number | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Cart, (cart) => cart, { onDelete: 'SET NULL' })
  @JoinTable()
  cart: Cart[]

  @ManyToOne(() => User, (user) => user.order, { onDelete: 'SET NULL' })
  user: User
}
