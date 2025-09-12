import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Video Games Tournament API')
        .setDescription('Video game tournament API for web console an ticketing clients')
        .setVersion('1.0.0')
        .build();

    const documentFactory  = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs',app,documentFactory)

    const prefix = 'api/'+ (process.env.APIVERSION ?? 'v1');
    app.setGlobalPrefix(prefix);

    await app.listen(process.env.APIPORT ?? 3000, '0.0.0.0');
}

bootstrap();
