import { Column, Entity, Index, OneToMany } from 'typeorm'
import { Product } from '../../product/entities/product.entity'

@Index('product_category_pkey', ['categoryId'], { unique: true })
@Entity('product_category', { schema: 'public' })
export class ProductCategory {
  @Column('integer', { primary: true, name: 'category_id' })
  categoryId: number

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 200
  })
  description: string | null

  @OneToMany(() => Product, (product) => product.category)
  product: Product[]
}
