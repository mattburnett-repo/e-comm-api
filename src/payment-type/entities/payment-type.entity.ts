import { IsUUID, IsNotEmpty } from 'class-validator'
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
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsNotEmpty()
  id: string

  @Column('character varying', {
    name: 'name',
    nullable: false,
    length: 100
  })
  name: string

  @Column('character varying', {
    name: 'description',
    nullable: false,
    length: 100
  })
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
