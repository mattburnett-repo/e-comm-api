import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UserAddress } from '../../user-address/entities/user-address'

@Index('address_pkey', ['id'], { unique: true })
@Entity('address', { schema: 'public' })
export class Address {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 100
  })
  firstName: string | null

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 100
  })
  lastName: string | null

  @Column('character varying', { name: 'address_1', length: 100 })
  address_1: string

  @Column('character varying', {
    name: 'address_2',
    nullable: true,
    length: 100
  })
  address_2: string | null

  @Column('character varying', { name: 'city', length: 100 })
  city: string

  @Column('character varying', { name: 'state_province', length: 100 })
  stateProvince: string

  @Column('character varying', { name: 'postal_code', length: 20 })
  postalCode: string

  @Column('character varying', { name: 'country', length: 100 })
  country: string

  @OneToMany(() => UserAddress, (userAddress) => userAddress.address)
  userAddress: UserAddress[]
}
