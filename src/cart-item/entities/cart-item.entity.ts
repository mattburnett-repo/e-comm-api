import {
  IsUUID,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDecimal
} from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'
import { Product } from '../../product/entities/product.entity'

import { ColumnNumericTransformer } from '../../util/ColumnNumericTransformer'

@Index('cart-item_pkey', ['id'], { unique: true })
@Entity('cart_item', { schema: 'public' })
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @IsUUID()
  @Column({ name: 'cart_id' })
  cart_id: string

  @IsUUID()
  @Column({ name: 'product_id' })
  product_id: string

  @IsString()
  @Column({ name: 'product_name' })
  productName: string

  @IsNumber()
  @Column({ name: 'product_quantity' })
  productQuantity: number

  @IsDecimal()
  @Column({
    type: 'numeric',
    name: 'product_price',
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  productPrice: number

  @IsDecimal()
  @Column('numeric', {
    name: 'line_item_total_price',
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  lineItemTotalPrice: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product

  @ManyToOne(() => Cart, (cart) => cart.cartItem, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'cart_id' })
  cart: Cart
}
