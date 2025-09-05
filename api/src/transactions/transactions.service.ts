import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  getTransactions(): string {
    return 'transactions';
  }
}
