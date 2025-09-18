import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { VideogamesTypeReqDto } from './dto/videogametypesreq.dto';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class VideogametypesService {
  private readonly url: string;
  constructor(private readonly httpService: HttpService) {
    this.url = `${process.env.ENDPOINT}/videogame-types`
  }

  private handleError(error: AxiosError) {
    console.error(error);
    return throwError(() => new Error('Axios Error'))
  }

  private handleResponse<T>() {
    return (source: Observable<AxiosResponse<T>>) =>
      source.pipe(
        map((response: AxiosResponse) => response.data),
        catchError(this.handleError)
      )
  }

  async getAll(): Promise<any> {
    return this.httpService.get(this.url).pipe(this.handleResponse());
  }

  async getById(id: string): Promise<any> {
    return this.httpService.get(`${this.url}/${id}`).pipe(this.handleResponse());
  }

  async postCreate(body: VideogamesTypeReqDto) {
    return this.httpService.post(this.url, body).pipe(this.handleResponse());
  }

  async patchModify(id: string, body: VideogamesTypeReqDto) {
    return this.httpService.patch(`${this.url}/${id}`, body).pipe(this.handleResponse());
  }

  async deleteRecord(id: string) {
    return this.httpService.delete(`${this.url}/${id}`).pipe(this.handleResponse());
  }
}
