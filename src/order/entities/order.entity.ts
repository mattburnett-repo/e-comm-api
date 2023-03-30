import { IsUUID, IsString, IsNotEmpty } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import { Cart } from '../../cart/entities/cart.entity'
import { User } from '../../user/entities/user.entity'

import { ColumnNumericTransformer } from '../../util/ColumnNumericTransformer'

@Index('order_pkey', ['id'], { unique: true })
@Entity('order', { schema: 'public' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @Column({ name: 'cart_id', nullable: true })
  cart_id: string

  @Column('uuid', { name: 'user_id', nullable: true })
  user_id: string

  @Column('character varying', { name: 'stripe_id', nullable: true })
  @IsString()
  stripe_id: string

  @CreateDateColumn()
  order_date: Date

  @Column('numeric', {
    name: 'tax',
    nullable: true,
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  tax: number | null

  @Column('numeric', {
    name: 'total_price',
    nullable: false,
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  total_price: number

  @Column('uuid', { name: 'payment_id', nullable: false })
  payment_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Cart, (cart) => cart.order, {
    eager: false,
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinTable()
  cart: Cart[]

  @ManyToOne(() => User, (user) => user.order, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User
}
