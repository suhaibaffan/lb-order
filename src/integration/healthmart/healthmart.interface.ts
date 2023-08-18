export interface IHealthmart {
  healthMartId?: string; // this is the integration order id.
  healthMartProduct: string;
  healthMartQuantity: number;
  healthMartClientInfo: IHealthmartClient;
}

interface IHealthmartClient {
  healthMartClientName: string;
  healthMartClientAddress: string;
  healthMartClientCity: string;
  healthMartClientState: string;
  healthMartClientZipcode: string;
  healthMartClientCountry: string;
}
