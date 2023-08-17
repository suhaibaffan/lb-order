import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { CustomerEntity } from './customer.entity';

export interface OrderEntity extends InMemoryDBEntity {
  product: string;
  quantity: number;
  customer: CustomerEntity;
}
