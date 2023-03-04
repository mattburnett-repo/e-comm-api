import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Carts } from './Carts'
import { Users } from './Users'

@Index('orders_pkey', ['id'], { unique: true })
@Entity('orders', { schema: 'public' })
export class Orders {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('date', {
    name: 'order_date',
    nullable: true,
    default: () => 'CURRENT_DATE'
  })
  orderDate: string | null

  @Column('numeric', {
    name: 'total_price',
    nullable: true,
    precision: 6,
    scale: 2
  })
  totalPrice: string | null

  @Column('integer', { name: 'payment_id', nullable: true })
  paymentId: number | null

  @ManyToOne(() => Carts, (carts) => carts.orders)
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'id' }])
  cart: Carts

  @ManyToOne(() => Users, (users) => users.orders)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users
}
