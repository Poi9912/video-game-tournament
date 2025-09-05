import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  getTeams(): string {
    return 'teams';
  }
}
