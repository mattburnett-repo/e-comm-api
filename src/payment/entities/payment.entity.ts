import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UserPayment } from '../../user-payment/entities/user-payment.entity'

@Index('payment_pkey', ['id'], { unique: true })
@Entity('payment', { schema: 'public' })
export class Payment {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { name: 'user_id' })
  userId: number

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
  amount: string

  @OneToMany(() => UserPayment, (userPayment) => userPayment.payment)
  userPayment: UserPayment[]
}
