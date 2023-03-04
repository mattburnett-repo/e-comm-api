import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Index
} from 'typeorm'
import { Cart } from '../../cart/entities/cart.entity'

@Index('cart-type_pkey', ['id'], { unique: true })
@Entity()
export class CartType {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

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

  @ManyToMany(() => Cart, (cart) => cart.id)
  cart: Cart[]
}
