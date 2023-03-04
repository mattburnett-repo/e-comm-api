import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'
import { User } from '../../user/entities/user.entity'

@Index('order_pkey', ['id'], { unique: true })
@Entity('order', { schema: 'public' })
export class Order {
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

  @ManyToOne(() => Cart, (cart) => cart.order)
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'id' }])
  cart: Cart

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
