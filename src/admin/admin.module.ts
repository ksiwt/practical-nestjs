import { Global, Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminProductsController } from './admin.products.controller';

@Global()
@Module({
  controllers: [AdminController, AdminProductsController],
})
export class AdminModule {}
