import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { CustomerEntity } from './customer.entity';
import { PharmacyIntegrationType } from '../interfaces/pharmacy.dto';

export interface OrderEntity extends InMemoryDBEntity {
  product: string;
  quantity: number;
  customer: CustomerEntity;
  type: PharmacyIntegrationType;
  orderId: string; // this is the integration order id.
}
