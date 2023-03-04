import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Payment } from '../../payment/entities/payment.entity'
import { User } from '../../user/entities/user.entity'

@Index('user_payment_pkey', ['paymentId', 'userId'], { unique: true })
@Entity('user_payment', { schema: 'public' })
export class UserPayment {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { primary: true, name: 'user_id' })
  userId: number

  @Column('integer', { primary: true, name: 'payment_id' })
  paymentId: number

  @ManyToOne(() => Payment, (payment) => payment.userPayment)
  @JoinColumn([{ name: 'payment_id', referencedColumnName: 'id' }])
  payment: Payment

  @ManyToOne(() => User, (user) => user.userPayment)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
