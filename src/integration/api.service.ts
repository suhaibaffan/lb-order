import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { PharmacyResponse } from 'src/interfaces/pharmacy.dto';

@Injectable()
export class ApiService {
  async getAvailablePharmacyIntegrationNames() {
    const response = await axios.get<PharmacyResponse[]>(
      `${process.env.PHARMACY_URL}/pharmacy`,
    );
    return response.data.map((pharmacy) => pharmacy.integrationName);
  }
}
