import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { DonationReqDto } from './dto/donationreq.dto';
import { DonationResDto } from './dto/donationres.dto';

@Injectable()
export class DonationsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    const url = `${process.env.ENDPOINT}/donations`;
    return this.httpService.get(url);
  }

  async getById(id: string): Promise<any> {
    const url = `${process.env.ENDPOINT}/donations/${id}`;
    return this.httpService.get(url);
  }

  async postCreate(body: DonationReqDto) {
    const url = `${process.env.ENDPOINT}/donations`;
    return this.httpService.post(url, body);
  }
}
