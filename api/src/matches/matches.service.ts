import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {
  getGames(): string {
    return 'matches';
  }
}
