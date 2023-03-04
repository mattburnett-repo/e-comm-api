import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { CartItems } from '../../cart-item/entities/cart-item.entity'
import { Orders } from '../../order/entities/order.entity'

@Index('carts_pkey', ['id'], { unique: true })
@Entity('carts', { schema: 'public' })
export class Carts {
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

  @OneToMany(() => CartItems, (cartItems) => cartItems.cart)
  cartItems: CartItems[]

  @OneToMany(() => Orders, (orders) => orders.cart)
  orders: Orders[]
}
