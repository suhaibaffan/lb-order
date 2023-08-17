import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface CustomerEntity extends InMemoryDBEntity {
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
}
