import { Injectable } from '@nestjs/common';

@Injectable()
export class DonationsService {
  getDonations(): string {
    return 'donations';
  }
}
