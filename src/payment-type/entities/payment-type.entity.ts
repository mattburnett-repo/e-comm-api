import { IsNotEmpty, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
