import { PharmacyIntegrationType } from '../../interfaces/pharmacy.dto';

export interface ICareplus {
  carePlusId: string; // this is the integration order id.
  carePlusProduct: string;
  carePlusQuantity: number;
  carePlusClientInfo: ICareplusClient;
}

interface ICareplusClient {
  carePlusClientName: string;
  carePlusClientAddress: string;
  carePlusClientCity: string;
  carePlusClientState: string;
  carePlusClientZipcode: string;
  carePlusClientCountry: string;
}
