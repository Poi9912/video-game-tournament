import { Controller, Get, Req } from "@nestjs/common";

@Controller('videogames-types')
export class VideogamestypeController {
    @Get()
    findAll() {
        return 'videogames-types';
    }
}