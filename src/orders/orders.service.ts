import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/entities/order.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ApiService } from 'src/integration/api.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepo: InMemoryDBService<OrderEntity>,
    private readonly apiService: ApiService,
  ) {}

  async getOrders(): Promise<OrderEntity[]> {
    return this.ordersRepo.getAll();
  }

  async createOrder(order: OrderEntity): Promise<OrderEntity> {
    return this.ordersRepo.create(order);
  }

  async updateOrder(order: OrderEntity) {
    await this.ordersRepo.update(order);
  }
}
