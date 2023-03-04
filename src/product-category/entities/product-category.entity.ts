import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import { Product } from '../../product/entities/product.entity'

@Index('product-category_pkey', ['id'], { unique: true })
@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

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

  @ManyToMany(() => Product, (product) => product.id)
  product: Product[]
}
