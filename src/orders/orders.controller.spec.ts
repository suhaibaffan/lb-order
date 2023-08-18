import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ApiService } from '../integration/api.service';
import { PharmacyIntegrationType } from '../interfaces/pharmacy.dto';

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), InMemoryDBModule.forRoot({})],
      controllers: [OrdersController],
      providers: [OrdersService, ApiService],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
  });

  describe('Healthz', () => {
    it('should return "Service is up!"', () => {
      expect(ordersController.isUp()).toBe('Service is up!');
    });
  });

  describe('Create order healthmart', () => {
    it('should return created order', async () => {
      // const order = new OrderEntity()
      const order = {
        product: 'Antibiotics',
        quantity: 2,
        type: PharmacyIntegrationType.HEALTHMART,
        orderId: '',
        id: '',
        customer: {
          id: '',
          name: 'Suhaib',
          address: 'thorncliffe park drive',
          city: 'string',
          state: 'string',
          zipcode: '54321',
          country: '',
        },
      };
      const orderResponse = await ordersController.createOrder(
        order,
        PharmacyIntegrationType.HEALTHMART,
      );
      expect(orderResponse.orderId).toBeDefined();
      expect(orderResponse.id).toBeDefined();
    });
  });

  describe('Create order quickcare', () => {
    it('should return created order', async () => {
      const order = {
        product: 'Antibiotics',
        quantity: 2,
        type: PharmacyIntegrationType.QUICKCARE,
        orderId: '',
        id: '',
        customer: {
          id: '',
          name: 'Suhaib',
          address: 'thorncliffe park drive',
          city: 'string',
          state: 'string',
          zipcode: '54321',
          country: '',
        },
      };
      const orderResponse = await ordersController.createOrder(
        order,
        PharmacyIntegrationType.QUICKCARE,
      );
      expect(orderResponse.orderId).toBeDefined();
      expect(orderResponse.id).toBeDefined();
    });
  });

  describe('Create order careplus', () => {
    it('should return created order', async () => {
      const order = {
        product: 'Antibiotics',
        quantity: 2,
        type: PharmacyIntegrationType.CAREPLUS,
        orderId: '',
        id: '',
        customer: {
          id: '',
          name: 'Suhaib',
          address: 'thorncliffe park drive',
          city: 'string',
          state: 'string',
          zipcode: '54321',
          country: '',
        },
      };
      const orderResponse = await ordersController.createOrder(
        order,
        PharmacyIntegrationType.CAREPLUS,
      );
      expect(orderResponse.orderId).toBeDefined();
      expect(orderResponse.id).toBeDefined();
    });
  });

  describe('Get orders should fetch created order', () => {
    it('should return created order', async () => {
      const order = {
        product: 'Antibiotics',
        quantity: 2,
        type: PharmacyIntegrationType.CAREPLUS,
        orderId: '',
        id: '',
        customer: {
          id: '',
          name: 'Suhaib',
          address: 'thorncliffe park drive',
          city: 'string',
          state: 'string',
          zipcode: '54321',
          country: '',
        },
      };
      await ordersController.createOrder(
        order,
        PharmacyIntegrationType.CAREPLUS,
      );

      const orders = await ordersController.getOrders();
      expect(orders.length).toBe(1);
      expect(orders[0].type).toBe(PharmacyIntegrationType.CAREPLUS);
    });
  });
});
