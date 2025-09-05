import { Injectable } from '@nestjs/common';

@Injectable()
export class TournamentService {
  getTournaments(): string {
    return 'tournaments';
  }
}
