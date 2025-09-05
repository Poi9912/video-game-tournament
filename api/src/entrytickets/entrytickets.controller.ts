import { Controller, Get, Req } from "@nestjs/common";

@Controller('entry-tickets')
export class EntryticketsController {
    @Get()
    findAll() {
        return 'entry-tickets';
    }
}