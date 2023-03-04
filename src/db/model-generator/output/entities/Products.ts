import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ProductCategories } from './ProductCategories'

@Index('products_pkey', ['id'], { unique: true })
@Entity('products', { schema: 'public' })
export class Products {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('character varying', { name: 'name', length: 100 })
  name: string

  @Column('character varying', { name: 'description', length: 1000 })
  description: string

  @Column('character varying', {
    name: 'image_url',
    nullable: true,
    length: 250
  })
  imageUrl: string | null

  @Column('numeric', { name: 'price', nullable: true, precision: 6, scale: 2 })
  price: string | null

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.products
  )
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'categoryId' }])
  category: ProductCategories
}
