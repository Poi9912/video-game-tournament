import { Controller, Get, Req } from "@nestjs/common";

@Controller('videogames')
export class VideogamesController {
    @Get()
    findAll() {
        return 'videogames';
    }
}