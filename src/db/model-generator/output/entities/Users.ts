import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Orders } from './Orders'
import { UsersAddresses } from './UsersAddresses'
import { UsersPayments } from './UsersPayments'

@Index('users_pkey', ['id'], { unique: true })
@Index('users_user_name_key', ['userName'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('character varying', { name: 'user_name', unique: true, length: 50 })
  userName: string

  @Column('character varying', { name: 'password', length: 100 })
  password: string

  @Column('character varying', { name: 'email', nullable: true, length: 50 })
  email: string | null

  @Column('character varying', {
    name: 'google_id',
    nullable: true,
    length: 100
  })
  googleId: string | null

  @Column('character varying', {
    name: 'google_display_name',
    nullable: true,
    length: 100
  })
  googleDisplayName: string | null

  @Column('character varying', {
    name: 'google_first_name',
    nullable: true,
    length: 100
  })
  googleFirstName: string | null

  @Column('character varying', {
    name: 'google_last_name',
    nullable: true,
    length: 100
  })
  googleLastName: string | null

  @Column('character varying', {
    name: 'google_image',
    nullable: true,
    length: 250
  })
  googleImage: string | null

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[]

  @OneToMany(() => UsersAddresses, (usersAddresses) => usersAddresses.user)
  usersAddresses: UsersAddresses[]

  @OneToMany(() => UsersPayments, (usersPayments) => usersPayments.user)
  usersPayments: UsersPayments[]
}
