import { Controller, Get, Req } from "@nestjs/common";

@Controller('tournaments')
export class TournamentsController {
    @Get()
    findAll() {
        return 'tournaments';
    }
}
