import axios from 'axios';
import { ICareplus } from './careplus.interface';
import { PharmacyIntegrationType } from '../../interfaces/pharmacy.dto';
import { OrderEntity } from '../../entities/order.entity';
import { PharmacyIntegration } from '../pharmacyIntegration.type';

export class CareplusService extends PharmacyIntegration {
  order: ICareplus;
  constructor(orderPayload: OrderEntity) {
    super(PharmacyIntegrationType.CAREPLUS);
    this.order = {
      carePlusId: '',
      carePlusProduct: orderPayload.product,
      carePlusQuantity: orderPayload.quantity,
      carePlusClientInfo: {
        carePlusClientName: orderPayload.customer.name,
        carePlusClientAddress: orderPayload.customer.address,
        carePlusClientCity: orderPayload.customer.city,
        carePlusClientState: orderPayload.customer.state,
        carePlusClientZipcode: orderPayload.customer.zipcode,
        carePlusClientCountry: orderPayload.customer.country,
      },
    };
  }

  async createOrder(): Promise<ICareplus> {
    const response = await axios.post<ICareplus>(
      `${process.env.PHARMACY_URL}/${this.name}/orders`,
      {
        ...this.order,
      },
    );

    console.log(response.data);
    return response.data;
  }
}
