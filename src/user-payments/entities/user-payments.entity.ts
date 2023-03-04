import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Payments } from '../../payment/entities/payment.entity'
import { User } from '../../user/entities/user.entity'

@Index('users_payments_pkey', ['paymentId', 'userId'], { unique: true })
@Entity('users_payments', { schema: 'public' })
export class UsersPayments {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { primary: true, name: 'user_id' })
  userId: number

  @Column('integer', { primary: true, name: 'payment_id' })
  paymentId: number

  @ManyToOne(() => Payments, (payments) => payments.usersPayments)
  @JoinColumn([{ name: 'payment_id', referencedColumnName: 'id' }])
  payment: Payments

  @ManyToOne(() => User, (users) => users.usersPayments)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
