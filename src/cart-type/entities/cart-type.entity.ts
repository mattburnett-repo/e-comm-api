import { IsNotEmpty, IsString } from 'class-validator'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Index,
  JoinTable
} from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'

@Index('cart-type_pkey', ['id'], { unique: true })
@Entity()
export class CartType {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string

  @Column({ nullable: false })
  @IsString()
  @IsNotEmpty()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Cart, (cart) => cart.cartType)
  @JoinTable()
  cart: Cart[]
}
