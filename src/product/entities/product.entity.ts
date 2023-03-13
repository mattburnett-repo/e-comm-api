import { IsNotEmpty, IsUUID } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Index,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from 'typeorm'

import { ProductCategory } from '../../product-category/entities/product-category.entity'

import { ColumnNumericTransformer } from '../../util/ColumnNumericTransformer'
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

  @Column('numeric', {
    name: 'price',
    nullable: false,
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  price: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToMany(
    () => ProductCategory,
    (productCategory) => productCategory.product,
    {
      eager: false,
      cascade: true,
      onDelete: 'CASCADE'
    }
  )
  @JoinTable({
    name: 'product_product_category', // table name for the junction table of this relation
    joinColumn: {
      name: 'product',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'product_category',
      referencedColumnName: 'id'
    }
  })
  category: ProductCategory[]
}
