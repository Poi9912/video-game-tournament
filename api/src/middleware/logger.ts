import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const timestamp = new Date().toISOString();
        console.log(
            '--------------------API--------------------' + '\n' +
            'TimeStamp: ' + timestamp + '\n' +
            'Method: ' + req.method + '\n' +
            'Path: ' + req.url + '\n' +
            'Params: ' + JSON.stringify(req.params) + '\n' +
            'Request Body: ' + JSON.stringify(req.body) + '\n' +
            'MessageID: ' + req.headers['message-id']
        );
        next();
    }
}
