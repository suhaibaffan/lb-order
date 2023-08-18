import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { PharmacyIntegrationType } from '../../interfaces/pharmacy.dto';

export interface CareplusEntity extends InMemoryDBEntity {
  product: string;
  quantity: number;
  type: PharmacyIntegrationType.CAREPLUS;
  orderId: string; // this is the integration order id.
  carePlusProduct: string;
  carePlusQuantity: number;
  carePlusClientInfo: CareplusClient;
}

interface CareplusClient extends InMemoryDBEntity {
  carePlusClientName: string;
  carePlusClientAddress: string;
  carePlusClientCity: string;
  carePlusClientState: string;
  carePlusClientZipcode: string;
  carePlusClientCountry: string;
}
