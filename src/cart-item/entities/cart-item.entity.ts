import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'

@Index('cart-item_pkey', ['cartId', 'productId'], { unique: true })
@Entity('cart-item', { schema: 'public' })
export class CartItem {
  @Column('integer', { primary: true, name: 'cart_id' })
  cartId: number

  @Column('integer', { primary: true, name: 'product_id' })
  productId: number

  @Column('integer', { name: 'product_quantity' })
  productQuantity: number

  @Column('numeric', { name: 'product_price', precision: 6, scale: 2 })
  productPrice: string

  @Column('numeric', { name: 'line_item_total_price', precision: 6, scale: 2 })
  lineItemTotalPrice: string

  @ManyToOne(() => Cart, (cart) => cart.cartItem)
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'id' }])
  cart: Cart
}
