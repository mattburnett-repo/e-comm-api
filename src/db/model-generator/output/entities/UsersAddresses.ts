import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Addresses } from './Addresses'
import { Users } from './Users'

@Index('users_addresses_pkey', ['addressId', 'userId'], { unique: true })
@Entity('users_addresses', { schema: 'public' })
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

  @ManyToOne(() => Users, (users) => users.usersAddresses)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users
}
