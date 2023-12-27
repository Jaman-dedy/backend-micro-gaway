import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NAT_SERVICE',
        transport: Transport.NATS,
        options: ['nats://nats'],
      },
    ]),
  ],
})
export class AppModule {}
