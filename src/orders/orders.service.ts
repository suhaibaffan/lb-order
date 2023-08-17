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
    const pharmacies =
      await this.apiService.getAvailablePharmacyIntegrationNames();

    console.log(pharmacies);
    return this.ordersRepo.create(order);
  }
}
