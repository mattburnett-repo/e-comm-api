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
    private repo: Repository<PaymentType>
  ) {
    this.logger = new Logger()
  }

  getProtected(): string {
    return 'This is a protected resource. If you see this, authentication was successful.'
  }

  create(createPaymentTypeDto: CreatePaymentTypeDto): Promise<PaymentType> {
    const retVal = this.repo.create(createPaymentTypeDto)

    this.logger.log(`ExampleService created a new Example: ${retVal.id}`)
    return this.repo.save(retVal)
  }

  findAll(): Promise<PaymentType[]> {
    return this.repo.find()
  }

  findOneById(id: number): Promise<PaymentType> {
    return this.repo.findOneById(id)
  }

  async update(id: number, updatePaymentTypeDto: UpdatePaymentTypeDto) {
    this.logger.log(`ExampleService updates an retVal: ${id}`)

    const updated = await this.repo.save(updatePaymentTypeDto)
    const retVal = await this.findOneById(updated.id)

    return retVal
  }

  async remove(id: number) {
    const toDelete = await this.findOneById(id)

    this.logger.log(`ExampleService deletes an Example: ${id}`)

    return this.repo.remove(toDelete)
  }
}
