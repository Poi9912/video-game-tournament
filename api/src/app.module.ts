import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { PruebaController } from './prueba.controller';
import { PruebaService } from './prueba.service';

@Module({
	imports: [],
	controllers: [AppController, PruebaController],
	providers: [AppService, PruebaService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
	}
}
