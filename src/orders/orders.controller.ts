import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  HttpException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderEntity } from 'src/entities/order.entity';
import { ApiService } from 'src/integration/api.service';
import { PharmacyIntegrationType } from 'src/interfaces/pharmacy.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly apiService: ApiService,
  ) {}

  @Get()
  async getOrders(): Promise<OrderEntity[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  async createOrder(
    @Body() order: OrderEntity,
    @Query('type') type: PharmacyIntegrationType,
  ): Promise<OrderEntity> {
    if (!type) {
      throw new HttpException('Pharmacy query param type is required.', 400);
    }

    const availablePharmacies =
      await this.apiService.getAvailablePharmacyIntegrationNames();

    if (!availablePharmacies.includes(type)) {
      throw new HttpException('Unsupported pharmacy', 400);
    }
    return this.ordersService.createOrder(order);
  }

  @Get('healthz')
  isUp(): string {
    return 'Service is up!';
  }
}
