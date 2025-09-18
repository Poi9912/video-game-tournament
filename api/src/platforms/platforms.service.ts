import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PlatformReqDto } from './dto/platformreq.dto';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class PlatformsService {
  private readonly url: string;
  constructor(private readonly httpService: HttpService) {
    this.url = `${process.env.ENDPOINT}/platforms`
  }

  private handleError(error: AxiosError) {
    console.error(error);
    return throwError(() => new Error('Axios Error'))
  }

  private handleRespose<T>() {
    return (source: Observable<AxiosResponse<T>>) =>
      source.pipe(
        map((response: AxiosResponse) => response.data),
        catchError(this.handleError)
      )
  }

  async getAll(): Promise<any> {
    return this.httpService.get(this.url).pipe(this.handleRespose());
  }

  async getById(id: string): Promise<any> {
    return this.httpService.get(`${this.url}/${id}`).pipe(this.handleRespose());
  }

  async postCreate(body: PlatformReqDto) {
    return this.httpService.post(this.url, body).pipe(this.handleRespose());
  }

  async patchModify(id: string, body: PlatformReqDto) {
    return this.httpService.patch(`${this.url}/${id}`, body).pipe(this.handleRespose());
  }

  async deleteRecord(id: string) {
    return this.httpService.delete(`${this.url}/${id}`).pipe(this.handleRespose());
  }
}
