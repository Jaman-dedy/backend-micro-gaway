import { Module } from '@nestjs/common';
import { usersModule } from './users/users.module';

@Module({
  imports: [usersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
