import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entities/order.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: InMemoryDBService<OrderEntity>) {}

  async getOrders(): Promise<OrderEntity[]> {
    return this.ordersRepo.getAll();
  }

  async getOrder(orderId: string): Promise<OrderEntity> {
    return this.ordersRepo.get(orderId);
  }

  async createOrder(order: OrderEntity): Promise<OrderEntity> {
    return this.ordersRepo.create(order);
  }

  async updateOrder(order: OrderEntity) {
    await this.ordersRepo.update(order);
  }
}
