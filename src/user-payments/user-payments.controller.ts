import { Controller } from '@nestjs/common';
import { UserPaymentsService } from './user-payments.service';

@Controller('user-payments')
export class UserPaymentsController {
  constructor(private readonly userPaymentsService: UserPaymentsService) {}
}
