import { Controller, Get, Req } from "@nestjs/common";

@Controller('platforms')
export class PlatformsController {
    @Get()
    findAll() {
        return 'platforms';
    }
}
