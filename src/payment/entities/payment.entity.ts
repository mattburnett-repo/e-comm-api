import { IsUUID, IsNotEmpty } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import { PaymentType } from '../../payment-type/entities/payment-type.entity'
import { User } from '../../user/entities/user.entity'

import { ColumnNumericTransformer } from '../../util/ColumnNumericTransformer'

@Index('payment_pkey', ['id'], { unique: true })
@Entity('payment', { schema: 'public' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('uuid', { name: 'user_id' })
  user_id: string

  @Column()
  payment_type_id: number

  @Column('character varying', {
    name: 'stripe_id',
    nullable: true,
    length: 100
  })
  stripe_id: string | null

  // FIXME: not sure what this is for
  @Column('integer', { name: 'created', nullable: true })
  created: number | null

  @Column('character varying', {
    name: 'payment_method',
    nullable: true,
    length: 100
  })
  payment_method: string | null

  @Column('character varying', {
    name: 'receipt_url',
    nullable: true,
    length: 200
  })
  receipt_url: string | null

  @Column('character varying', {
    name: 'transaction_status',
    nullable: true,
    length: 50
  })
  transaction_status: string | null

  @Column('numeric', {
    name: 'amount',
    precision: 6,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  amount: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => PaymentType, (paymentType) => paymentType.payment)
  @JoinColumn({ name: 'payment_type_id' })
  paymentType: PaymentType

  @ManyToOne(() => User, (user) => user.payment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User
}
