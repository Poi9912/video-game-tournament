import { Injectable } from '@nestjs/common';

@Injectable()
export class EntryticketsService {
  getEntrytickets(): string {
    return 'entry-tickets';
  }
}
