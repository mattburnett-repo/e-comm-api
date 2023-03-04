import { IsNotEmpty, IsUUID } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Index,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany
} from 'typeorm'

import { ProductCategory } from '../../product-category/entities/product-category.entity'
@Index('product_pkey', ['id'], { unique: true })
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('character varying', { name: 'name', nullable: false, length: 100 })
  name: string

  @Column('character varying', {
    name: 'description',
    nullable: false,
    length: 1000
  })
  description: string

  @Column('character varying', {
    name: 'image_url',
    nullable: true,
    length: 250
  })
  imageUrl: string | null

  @Column('numeric', { name: 'price', nullable: false, precision: 6, scale: 2 })
  price: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(() => ProductCategory, (productCategory) => productCategory.id)
  @JoinTable({
    name: 'product_product_category',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'product_category_id',
      referencedColumnName: 'id'
    }
  })
  category: ProductCategory[]
}
