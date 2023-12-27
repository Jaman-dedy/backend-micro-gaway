import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {

 constructor(@Inject('NATS_SERVICE') private natsclient: ClientProxy) {}

  @Post()
  createUser() {}
}
