import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto :>> ', createUserDto);
    return this.natsclient.send({ cmd: 'createUser' }, createUserDto);
  }

  @Get(':id')
  async getUserBydId(@Param('id') id: string) {
    const user = await lastValueFrom(
      this.natsclient.send({ cmd: 'getUserById' }, { userId: id }),
    );
    if (user) return user;
    else throw new HttpException('USER NOT FOUND', 404);
  }
}
