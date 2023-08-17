import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [ConfigModule.forRoot(), InMemoryDBModule.forRoot({})],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
