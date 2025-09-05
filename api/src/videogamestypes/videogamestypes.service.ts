import { Injectable } from '@nestjs/common';

@Injectable()
export class VideogamestypesService {
  getUsers(): string {
    return 'videogames-types';
  }
}
