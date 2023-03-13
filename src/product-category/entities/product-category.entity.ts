import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import { Product } from '../../product/entities/product.entity'

@Index('product-category_pkey', ['id'], { unique: true })
@Entity()
export class ProductCategory {
  @PrimaryColumn()
  @IsNumber()
  @IsNotEmpty()
  id: number

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Product, (product) => product.category)
  product: Product[]
}
