import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UnauthorizedDto } from './global/Unauthorized.dto';
import { NotFoundDto } from './global/NotFound.dto';
import { InternalServerErrorDto } from './global/InternalServerError.dto';
import { ForbiddenDto } from './global/Forbidden.dto';

async function bootstrap() {
    //implements NestJS with express
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

    //swagger settings
    const config = new DocumentBuilder()
        .setTitle('Video Games Tournament API')
        .setDescription('Video game tournament API for web console an ticketing clients')
        .setVersion('1.0.0')
        .addGlobalResponse({
            status: 401,
            description: 'Unauthorized',
            type: UnauthorizedDto
        })
        .addGlobalResponse({
            status: 403,
            description: 'Forbidden',
            type: ForbiddenDto
        })
        .addGlobalResponse({
            status: 404,
            description: 'Not found',
            type: NotFoundDto
        })
        .addGlobalResponse({
            status: 500,
            description: 'Internal Server Error',
            type: InternalServerErrorDto
        })
        .addGlobalParameters({
            name: 'message-id',
            in: 'header',
            description: 'v4 style guid',
            required: true,
            schema: {
                type: 'string',
                example: 'd2bac942-3912-40ea-a0ad-e62d12b7bf1d'
            }
        })
        .build();
    const documentFactory  = () => SwaggerModule.createDocument(app, config);
    const swaggerPathPrefix = (process.env.APIVERSION ?? 'v1' ) + '/docs';
    const swaggerPathJson = swaggerPathPrefix + '/json';
    SwaggerModule.setup(swaggerPathPrefix,app,documentFactory,{
        jsonDocumentUrl: swaggerPathJson
    })

    //api settings
    const prefix = (process.env.APIVERSION ?? 'v1');
    app.setGlobalPrefix(prefix);
    app.set('query parser', 'extended');
    await app.listen(process.env.APIPORT ?? 3000,'0.0.0.0');
}

bootstrap();

