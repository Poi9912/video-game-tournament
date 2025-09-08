import { Controller, Get, Req } from "@nestjs/common";

@Controller('videogames-types')
export class VideogametypesController {
    @Get()
    findAll() {
        return 'videogame-types';
    }
}