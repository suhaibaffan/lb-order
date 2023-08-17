export interface PharmacyResponse {
  integrationName: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  fax: string;
  phone: string;
}

export enum PharmacyIntegrationType {
  HEALTHMART = 'healthmart',
  CAREPLUS = 'careplus',
  QUICKCARE = 'quickcare',
}
