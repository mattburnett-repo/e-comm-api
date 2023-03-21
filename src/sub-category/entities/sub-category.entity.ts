import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  Index
} from 'typeorm'

import { Product } from '../../product/entities/product.entity'

@Index('product-subcategory_pkey', ['id'], { unique: true })
@Entity()
export class SubCategory {
  @PrimaryColumn()
  @IsNumber()
  @IsNotEmpty()
  id: number

  @Column()
  @IsString()
  @IsNotEmpty()
  code: string

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => Product, (product) => product.subCategory)
  product: Product[]
}
