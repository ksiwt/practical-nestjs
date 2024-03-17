import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
})
export class AppModule {}
