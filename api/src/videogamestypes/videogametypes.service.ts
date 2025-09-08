import { Injectable } from '@nestjs/common';

@Injectable()
export class VideogametypesService {
  getVideogametypes(): string {
    return 'videogame-types';
  }
}
