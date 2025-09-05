import { Controller, Get, Req } from "@nestjs/common";

@Controller('games')
export class GamesController {
    @Get()
    findAll() {
        return 'Games';
    }
}