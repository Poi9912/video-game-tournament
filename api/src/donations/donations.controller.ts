import { Controller, Get, Req } from "@nestjs/common";

@Controller('donations')
export class DonationsController {
    @Get()
    findAll() {
        return 'donations';  
    }
}