import { Controller, Get, Req } from "@nestjs/common";

@Controller('teams')
export class TeamsController {
    @Get()
    findAll() {
        return 'teams';
    }
}
