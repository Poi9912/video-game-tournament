import { Controller, Get, Req } from "@nestjs/common";

@Controller('prizes')
export class PrizesController {
    @Get()
    findAll() {
        return 'prizes';
    }
}
