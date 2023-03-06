import { IsUUID, IsNotEmpty } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { PaymentType } from '../../payment-type/entities/payment-type.entity'
import { User } from '../../user/entities/user.entity'

@Index('payment_pkey', ['id'], { unique: true })
@Entity('payment', { schema: 'public' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('uuid', { name: 'user_id' })
  userId: string

  @Column('character varying', {
    name: 'stripe_id',
    nullable: true,
    length: 100
  })
  stripeId: string | null

  @Column('integer', { name: 'created', nullable: true })
  created: number | null

  @Column('character varying', {
    name: 'payment_method',
    nullable: true,
    length: 100
  })
  paymentMethod: string | null

  @Column('character varying', {
    name: 'receipt_url',
    nullable: true,
    length: 200
  })
  receiptUrl: string | null

  @Column('character varying', {
    name: 'transaction_status',
    nullable: true,
    length: 50
  })
  transactionStatus: string | null

  @Column('numeric', { name: 'amount', precision: 6, scale: 2 })
  amount: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToOne(() => PaymentType)
  @JoinColumn({ name: 'payment_type_id' })
  paymentType: PaymentType

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User[]
}
