import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('payment_types_pkey', ['id'], { unique: true })
@Entity('payment_types', { schema: 'public' })
export class PaymentTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 100
  })
  description: string | null
}
