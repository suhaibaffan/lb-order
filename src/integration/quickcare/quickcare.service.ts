import axios from 'axios';
import { IQuickcare } from './quickcare.interface';
import { PharmacyIntegrationType } from '../../interfaces/pharmacy.dto';
import { OrderEntity } from '../../entities/order.entity';
import { PharmacyIntegration } from '../pharmacyIntegration.type';

export class QuickcareService extends PharmacyIntegration {
  order: IQuickcare;
  constructor(orderPayload: OrderEntity) {
    super(PharmacyIntegrationType.QUICKCARE);
    this.order = {
      quickCareProduct: orderPayload.product,
      quickCareQuantity: orderPayload.quantity,
      quickCareClientInfo: {
        quickCareClientName: orderPayload.customer.name,
        quickCareClientAddress: orderPayload.customer.address,
        quickCareClientCity: orderPayload.customer.city,
        quickCareClientState: orderPayload.customer.state,
        quickCareClientZipcode: orderPayload.customer.zipcode,
        quickCareClientCountry: orderPayload.customer.country,
      },
    };
  }

  async createOrder(): Promise<IQuickcare> {
    const response = await axios.post<IQuickcare>(
      `${process.env.PHARMACY_URL}/${this.name}/orders`,
      {
        ...this.order,
      },
    );

    return response.data;
  }
}
