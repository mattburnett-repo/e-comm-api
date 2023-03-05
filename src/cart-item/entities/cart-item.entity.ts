import { IsUUID, IsNotEmpty } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'

@Index('cart-item_pkey', ['cartId'], { unique: true })
@Entity('cart_item', { schema: 'public' })
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('uuid', { primary: true, name: 'cart_id' })
  cartId: string

  @Column('uuid', { primary: true, name: 'product_id' })
  productId: string

  @Column({ name: 'product_name' })
  productName: string

  @Column('integer', { name: 'product_quantity' })
  productQuantity: number

  @Column('numeric', { name: 'product_price', precision: 6, scale: 2 })
  productPrice: number

  @Column('numeric', { name: 'line_item_total_price', precision: 6, scale: 2 })
  lineItemTotalPrice: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Cart, (cart) => cart.cartItem)
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'id' }])
  cart: Cart
}
