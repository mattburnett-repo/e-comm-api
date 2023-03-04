import {
  Entity,
  Column,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm'

import { hash } from 'argon2'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

import { Orders } from '../../order/entities/order.entity'
import { UsersAddresses } from '../../user-addresses/entities/user-addresses'
import { UsersPayments } from '../../user-payments/entities/user-payments.entity'
@Index('users_pkey', ['id'], { unique: true })
@Index('users_user_name_key', ['username'], { unique: true })
@Entity()
export class User {
  // hash the password before insert / update
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    // TODO: this needs a salt
    this.password = await hash(this.password)
  }

  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column({ unique: true, nullable: false })
  @IsNotEmpty()
  @IsString()
  username: string

  @Column({ unique: true, nullable: true })
  @IsString()
  email: string

  @Column({ nullable: false })
  @IsNotEmpty()
  @IsString()
  password: string

  @Column({ nullable: true })
  // @IsNotEmpty()
  @IsString()
  firstName: string | null

  @Column({ nullable: true })
  // @IsNotEmpty()
  @IsString()
  lastName: string

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

  @Column({ nullable: true })
  refreshToken: string | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[]

  @OneToMany(() => UsersAddresses, (usersAddresses) => usersAddresses.user)
  usersAddresses: UsersAddresses[]

  @OneToMany(() => UsersPayments, (usersPayments) => usersPayments.user)
  usersPayments: UsersPayments[]
}
