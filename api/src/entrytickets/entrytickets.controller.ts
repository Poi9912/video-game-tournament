import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { EntryticketsService } from "./entrytickets.service";
import { EntryTicketReqDto } from "./dto/entryticketsreq.dto";

@ApiTags('Tickets')
@Controller('entry-tickets')
export class EntryticketsController {
    constructor(private readonly entryticketsService: EntryticketsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.entryticketsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findEntryTicket(@Param() params: any) {
        return this.entryticketsService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createEntryTicket(@Body() createEntryTicket: EntryTicketReqDto) {
        return this.entryticketsService.postCreate(createEntryTicket);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateEntryTicket(@Param() params: any, @Body() updateEntryTicket: EntryTicketReqDto) {
        return this.entryticketsService.patchModify(params.id, updateEntryTicket);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteEntryTicket(@Param() params: any) {
        return this.entryticketsService.deleteRecord(params.id);
    }
}