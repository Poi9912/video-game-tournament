import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { EntryticketsService } from "./entrytickets.service";
import { EntryTicketReqDto } from "./dto/entryticketsreq.dto";
import EntryTicketsSwagger from "./entrytickets.swagger";

@Controller('entry-tickets')
@EntryTicketsSwagger.ControllerDocs()
export class EntryticketsController {
    constructor(private readonly entryticketsService: EntryticketsService){}

    @Get()
    @HttpCode(200)
    @EntryTicketsSwagger.FindAllDocs()
    async findAll() {
        return this.entryticketsService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @EntryTicketsSwagger.FindOneDocs()
    async findEntryTicket(@Param() params: any) {
        return this.entryticketsService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @EntryTicketsSwagger.CreateDocs()
    async createEntryTicket(@Body() createEntryTicket: EntryTicketReqDto) {
        return this.entryticketsService.postCreate(createEntryTicket);
    }

    @Patch(':id')
    @HttpCode(200)
    @EntryTicketsSwagger.UpdateDocs()
    async updateEntryTicket(@Param() params: any, @Body() updateEntryTicket: EntryTicketReqDto) {
        return this.entryticketsService.patchModify(params.id, updateEntryTicket);
    }

    @Delete(':id')
    @HttpCode(204)
    @EntryTicketsSwagger.DeleteDocs()
    async deleteEntryTicket(@Param() params: any) {
        return this.entryticketsService.deleteRecord(params.id);
    }
}