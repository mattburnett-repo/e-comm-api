import { IsNotEmpty, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Payment } from '../../payment/entities/payment.entity'

@Index('payment_type_pkey', ['id'], { unique: true })
@Entity('payment_type', { schema: 'public' })
export class PaymentType {
  @PrimaryGeneratedColumn()
  id: number

  @Column('character varying', {
    name: 'name',
    nullable: false,
    length: 100
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @Column('character varying', {
    name: 'description',
    nullable: false,
    length: 100
  })
  @IsString()
  @IsNotEmpty()
  description: string

  @OneToOne(() => Payment)
  payment: Payment

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
