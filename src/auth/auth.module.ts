import { Module } from '@nestjs/common';
import { AuthController } from './auth.conrtoller';

@Module({
  controllers: [AuthController],
})
export class AuthModule {}
