import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'
import { User } from '../../user/entities/user.entity'

@Index('address_pkey', ['id'], { unique: true })
@Entity('address', { schema: 'public' })
export class Address {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column()
  user_id: string

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 100
  })
  @IsString()
  firstName: string | null

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 100
  })
  @IsString()
  lastName: string | null

  @Column('character varying', { name: 'address_1', length: 100 })
  @IsString()
  @IsNotEmpty()
  address_1: string

  @Column('character varying', {
    name: 'address_2',
    nullable: true,
    length: 100
  })
  @IsString()
  address_2: string | null

  @Column('character varying', { name: 'city', length: 100 })
  @IsString()
  @IsNotEmpty()
  city: string

  @Column('character varying', { name: 'state_province', length: 100 })
  @IsString()
  @IsNotEmpty()
  stateProvince: string

  @Column('character varying', { name: 'postal_code', length: 20 })
  @IsString()
  @IsNotEmpty()
  postalCode: string

  @Column('character varying', { name: 'country', length: 100 })
  @IsString()
  @IsNotEmpty()
  country: string

  @ManyToOne(() => User, (user) => user.address, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'user_id' })
  user: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
