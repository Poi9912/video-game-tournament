import { Controller, Get, Req } from "@nestjs/common";

@Controller('prueba')
export class PruebaController {
    @Get()
    findAll() {
        return 'Prueba';
    }
}