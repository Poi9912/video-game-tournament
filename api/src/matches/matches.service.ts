import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MatchesReqDto } from './dto/matchesreq.dto';
import { catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class MatchesService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    const url = `${process.env.ENDPOINT}/matches`;
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async getById(id: string): Promise<any> {
    const url = `${process.env.ENDPOINT}/matches/${id}`;
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async postCreate(body: MatchesReqDto) {
    const url = `${process.env.ENDPOINT}/matches`;
    return this.httpService.post(url, body).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async patchModify(id: string, body: MatchesReqDto) {
    const url = `${process.env.ENDPOINT}/matches/${id}`;
    return this.httpService.patch(url, body).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async deleteRecord(id: string) {
    const url = `${process.env.ENDPOINT}/matches/${id}`;
    return this.httpService.delete(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }
}
