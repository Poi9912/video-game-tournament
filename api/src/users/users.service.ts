import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { UserReqDto } from './dto/usersreq.dto';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  private readonly url: string;
  constructor(private readonly httpService: HttpService) {
    this.url = `${process.env.ENDPOINT}/users`
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

  async postCreate(body: UserReqDto) {
    return this.httpService.post(this.url, body).pipe(this.handleResponse());
  }

  async patchModify(id: string, body: UserReqDto) {
    return this.httpService.patch(`${this.url}/${id}`, body).pipe(this.handleResponse());
  }

  async deleteRecord(id: string) {
    return this.httpService.delete(`${this.url}/${id}`).pipe(this.handleResponse());
  }
}
