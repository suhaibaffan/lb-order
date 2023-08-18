import axios from 'axios';
import { OrderEntity } from '../entities/order.entity';

export abstract class PharmacyIntegration {
  constructor(public name: string) {}

  async getOrders<T>(): Promise<T> {
    const response = await axios.get<T>(
      `${process.env.PHARMACY_URL}/pharmacy/${this.name}/orders`,
    );

    return response.data;
  }

  async getOrder<T>(orderId: string): Promise<T> {
    const response = await axios.get<T>(
      `${process.env.PHARMACY_URL}/pharmacy/${this.name}/orders/${orderId}`,
    );

    return response.data;
  }
}

// export interface IPharmacyIntegration extends PharmacyIntegration {
//   createOrder<T>(): Promise<T>;
// }
