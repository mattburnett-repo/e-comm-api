import { Column, Entity, Index, OneToMany } from 'typeorm'
import { Products } from '../../product/entities/product.entity'

@Index('product_categories_pkey', ['categoryId'], { unique: true })
@Entity('product_categories', { schema: 'public' })
export class ProductCategories {
  @Column('integer', { primary: true, name: 'category_id' })
  categoryId: number

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 200
  })
  description: string | null

  @OneToMany(() => Products, (products) => products.category)
  products: Products[]
}
