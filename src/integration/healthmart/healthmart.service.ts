import axios from 'axios';
import { IHealthmart } from './healthmart.interface';
import { PharmacyIntegrationType } from '../../interfaces/pharmacy.dto';
import { OrderEntity } from '../../entities/order.entity';
import { PharmacyIntegration } from '../pharmacyIntegration.type';

export class HealthmartService extends PharmacyIntegration {
  order: IHealthmart;
  constructor(orderPayload: OrderEntity) {
    super(PharmacyIntegrationType.HEALTHMART);
    this.order = {
      healthMartProduct: orderPayload.product,
      healthMartQuantity: orderPayload.quantity,
      healthMartClientInfo: {
        healthMartClientName: orderPayload.customer.name,
        healthMartClientAddress: orderPayload.customer.address,
        healthMartClientCity: orderPayload.customer.city,
        healthMartClientState: orderPayload.customer.state,
        healthMartClientZipcode: orderPayload.customer.zipcode,
        healthMartClientCountry: orderPayload.customer.country,
      },
    };
  }

  async createOrder(): Promise<IHealthmart> {
    const response = await axios.post<IHealthmart>(
      `${process.env.PHARMACY_URL}/${this.name}/orders`,
      {
        ...this.order,
      },
    );

    return response.data;
  }
}
