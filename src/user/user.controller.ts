import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

import { ApiBadRequestResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AccessTokenGuard } from '../common/guards/accessToken.guard'

@ApiTags('user')
@Controller('user')
export class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usersService: UserService) { }

  @ApiBadRequestResponse()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @UseGuards(AccessTokenGuard)
  @Get('protected')
  @ApiBearerAuth('bearerAuth')
  getProtected(): string {
    return this.usersService.getProtected()
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get('/id/:id')
  findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.findOneById(id)
  }

  @Get('/username/:username')
  findOneByUsername(@Param('username') username: string) {
    return this.usersService.findOneByUsername(username)
  }

  @UseGuards(AccessTokenGuard)
  @Patch('/id/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update(id, updateUserDto)
  }

  @UseGuards(AccessTokenGuard)
  @Delete('/id/:id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.remove(id)
  }
}
