import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreatePaymentTypeDto } from './dto/create-payment-type.dto'
import { UpdatePaymentTypeDto } from './dto/update-payment-type.dto'

import { PaymentType } from './entities/payment-type.entity'

@Injectable()
export class PaymentTypeService {
  logger: Logger

  constructor(
    @InjectRepository(PaymentType)
    private paymentTypeRepository: Repository<PaymentType>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createPaymentTypeDto: CreatePaymentTypeDto): Promise<PaymentType> {
    const retVal = this.paymentTypeRepository.create(createPaymentTypeDto)

    this.logger.log(`ExampleService created a new Example: ${retVal.id}`)
    return this.paymentTypeRepository.save(retVal)
  }

  findAll(): Promise<PaymentType[]> {
    return this.paymentTypeRepository.find()
  }

  findOneById(id: number): Promise<PaymentType> {
    return this.paymentTypeRepository.findOneById(id)
  }

  async update(id: number, updatePaymentTypeDto: UpdatePaymentTypeDto) {
    const retVal = await this.findOneById(id)

    retVal.id = updatePaymentTypeDto.id
    retVal.name = updatePaymentTypeDto.name
    retVal.description = updatePaymentTypeDto.description

    this.logger.log(`ExampleService updates an retVal: ${id}`)

    return this.paymentTypeRepository.save(retVal)
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ExampleService deletes an Example: ${id}`)

    return this.paymentTypeRepository.remove(toDelete)
  }
}
