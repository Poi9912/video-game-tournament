import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { PruebaController } from './prueba/prueba.controller';
import { PruebaService } from './prueba/prueba.service';

@Module({
	imports: [],
	controllers: [PruebaController],
	providers: [PruebaService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
	}
}
