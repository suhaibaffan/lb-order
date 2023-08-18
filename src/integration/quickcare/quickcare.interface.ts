export interface IQuickcare {
  quickCareId?: string; // this is the integration order id.
  quickCareProduct: string;
  quickCareQuantity: number;
  quickCareClientInfo: IQuickcareClient;
}

interface IQuickcareClient {
  quickCareClientName: string;
  quickCareClientAddress: string;
  quickCareClientCity: string;
  quickCareClientState: string;
  quickCareClientZipcode: string;
  quickCareClientCountry: string;
}
