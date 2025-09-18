import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from 'rxjs';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  constructor(private httpService: HttpService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const ctx = context.switchToHttp();
    const messageId = ctx.getRequest().headers['message-id'];

    if (messageId) {
      this.httpService.axiosRef.defaults.headers.common['message-id'] = messageId;
    }
    return next.handle().pipe();
  }
}