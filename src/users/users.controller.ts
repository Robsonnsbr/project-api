import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.getUsers();
  }
  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.usersService.getUsersById(id);
  }
  @Post()
  createUser(@Body() user: UserDTO) {
    if (!user.name || !user.email) {
      throw new BadRequestException(
        'The provided name or email does not exist or is invalid',
      );
    }
    return this.usersService.create(user);
  }
}
