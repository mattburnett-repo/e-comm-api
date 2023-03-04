import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Address } from '../../address/entities/address.entity'
import { User } from '../../user/entities/user.entity'

@Index('user_address_pkey', ['addressId', 'userId'], { unique: true })
@Entity('user_address', { schema: 'public' })
export class UserAddress {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { primary: true, name: 'user_id' })
  userId: number

  @Column('integer', { primary: true, name: 'address_id' })
  addressId: number

  @ManyToOne(() => Address, (address) => address.userAddress)
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address: Address

  @ManyToOne(() => User, (user) => user.userAddress)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
