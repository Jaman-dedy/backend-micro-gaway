import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: ['nats://nats'],
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: 'NAT_SERVICE',
        transport: Transport.NATS,
        options: ['nats://nats'],
      },
    ]),
  ],
})
export class NatsClientModule {}
