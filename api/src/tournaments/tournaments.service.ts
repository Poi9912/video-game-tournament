import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TournamentReqDto } from './dto/tournamentsreq.dto';
import { catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class TournamentsService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    const url = `${process.env.ENDPOINT}/tournaments`;
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
    const url = `${process.env.ENDPOINT}/tournaments/${id}`;
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async postCreate(body: TournamentReqDto) {
    const url = `${process.env.ENDPOINT}/tournaments`;
    return this.httpService.post(url, body).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async patchModify(id: string, body: TournamentReqDto) {
    const url = `${process.env.ENDPOINT}/tournaments/${id}`;
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
    const url = `${process.env.ENDPOINT}/tournaments/${id}`;
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
