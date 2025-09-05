import { Injectable } from '@nestjs/common';

@Injectable()
export class PlatformsService {
  getPlatforms(): string {
    return 'platforms';
  }
}
