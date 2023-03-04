import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { CartItem } from '../../cart-item/entities/cart-item.entity'
import { Order } from '../../order/entities/order.entity'

@Index('cart_pkey', ['id'], { unique: true })
@Entity('cart', { schema: 'public' })
export class Cart {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { name: 'user_id' })
  userId: number

  @Column('character varying', { name: 'name', nullable: true, length: 150 })
  name: string | null

  @Column('date', {
    name: 'order_date',
    nullable: true,
    default: () => 'CURRENT_DATE'
  })
  orderDate: string | null

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cartItem: CartItem[]

  @OneToMany(() => Order, (order) => order.cart)
  order: Order[]
}
