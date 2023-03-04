import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Addresses } from '../../address/entities/address.entity'
import { User } from '../../user/entities/user.entity'

@Index('user_addresses_pkey', ['addressId', 'userId'], { unique: true })
@Entity('user_addresses', { schema: 'public' })
export class UsersAddresses {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('integer', { primary: true, name: 'user_id' })
  userId: number

  @Column('integer', { primary: true, name: 'address_id' })
  addressId: number

  @ManyToOne(() => Addresses, (addresses) => addresses.usersAddresses)
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address: Addresses

  @ManyToOne(() => User, (users) => users.usersAddresses)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User
}
