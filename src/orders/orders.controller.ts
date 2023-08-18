import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  HttpException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderEntity } from '../entities/order.entity';
import { ApiService } from '../integration/api.service';
import { PharmacyIntegrationType } from '../interfaces/pharmacy.dto';
import { CareplusService } from '../integration/careplus/careplus.service';
import { HealthmartService } from '../integration/healthmart/healthmart.service';

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
    const savedOrder = await this.ordersService.createOrder({ ...order, type });

    if (type === PharmacyIntegrationType.CAREPLUS) {
      const careplusIntegration = new CareplusService(savedOrder);
      const careplus = await careplusIntegration.createOrder();

      savedOrder.orderId = careplus.carePlusId;
    }

    if (type === PharmacyIntegrationType.HEALTHMART) {
      const healthmartIntegration = new HealthmartService(savedOrder);
      const healthmart = await healthmartIntegration.createOrder();

      savedOrder.orderId = healthmart.healthMartId;
    }

    await this.ordersService.updateOrder(savedOrder);

    return savedOrder;
  }

  @Get('healthz')
  isUp(): string {
    return 'Service is up!';
  }
}
