import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { UserReqDto } from './dto/usersreq.dto';
import { catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<any> {
    const url = `${process.env.ENDPOINT}/users`;
    console.log(`Resend to ${url}`);
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
    const url = `${process.env.ENDPOINT}/users/${id}`;
    console.log(`Resend to ${url}`);
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async postCreate(body: UserReqDto) {
    const url = `${process.env.ENDPOINT}/users`;
    console.log(`Resend to ${url}`);
    return this.httpService.post(url, body).pipe(
      map((response: AxiosResponse) => response.data),
      catchError((error: AxiosError) => {
        console.error(error
        );
        throw 'Axios Error';
      })
    );
  }

  async patchModify(id: string, body: UserReqDto) {
    const url = `${process.env.ENDPOINT}/users/${id}`;
    console.log(`Resend to ${url}`);
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
    const url = `${process.env.ENDPOINT}/users/${id}`;
    console.log(`Resend to ${url}`);
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
