import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderEntity } from 'src/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(): Promise<OrderEntity[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  createOrder(@Body() order: OrderEntity): Promise<OrderEntity> {
    return this.ordersService.createOrder(order);
  }

  @Get('healthz')
  isUp(): string {
    return 'Service is up!';
  }
}
