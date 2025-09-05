import { Injectable } from '@nestjs/common';

@Injectable()
export class PrizesService {
  getPrizes(): string {
    return 'prizes';
  }
}
