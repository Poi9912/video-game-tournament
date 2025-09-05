import { Injectable } from '@nestjs/common';

@Injectable()
export class VideogamesService {
  getVideogames(): string {
    return 'videogames';
  }
}
