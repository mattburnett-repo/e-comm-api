import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreatePaymentDto } from './dto/create-payment.dto'
import { UpdatePaymentDto } from './dto/update-payment.dto'

import { Payment } from './entities/payment.entity'

@Injectable()
export class PaymentService {
  logger: Logger

  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const retVal = this.paymentRepository.create(createPaymentDto)

    this.logger.log(`PaymentService created a new Payment: ${retVal.id}`)
    return this.paymentRepository.save(retVal)
  }

  findAll(): Promise<Payment[]> {
    return this.paymentRepository.find()
  }

  findOneById(id: string): Promise<Payment> {
    return this.paymentRepository.findOneById(id)
  }

  async update(id: string, updateExampleDto: UpdatePaymentDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updateExampleDto.id

    this.logger.log(`PaymentService updates a Payment: ${id}`)

    return this.paymentRepository.save(retVal)
  }

  async remove(id: string) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`PaymentService deletes a Payment: ${id}`)

    return this.paymentRepository.remove(toDelete)
  }
}
