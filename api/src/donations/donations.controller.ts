import { Controller, Get, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('games')
@Controller('donations')
export class DonationsController {
    @Get()
    findAll() {
        return 'donations';
    }
}