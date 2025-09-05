import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  getGames(): string {
    return 'games';
  }
}
