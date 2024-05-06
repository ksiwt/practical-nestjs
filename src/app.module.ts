import { Global, Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { AdminModule } from './admin/admin.module';
import { User } from './models/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './models/users.service';
import { CartModule } from './cart/cart.module';
import { Order } from './models/order.entity';
import { OrdersService } from './models/orders.service';
import { AccountModule } from './account/account.models';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online_store',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product, User, Order]),
    AdminModule,
    AuthModule,
    CartModule,
    AccountModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, UsersService, OrdersService],
  exports: [ProductsService, UsersService, OrdersService],
})
export class AppModule {}
