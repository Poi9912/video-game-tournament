import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('entry-tickets')
export class EntryticketsController {
    @Get()
    @HttpCode(200)
    findAll() {
        return 'entry-tickets';
    }
    @Get(':id')
    @HttpCode(200)
    findEntryTicket(@Param() params: any): string {
        return `entry-ticket by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createEntryTicket(): string {
        return 'creates a entry-ticket';
    }
    @Patch(':id')
    @HttpCode(200)
    updateEntryTicket(@Param() params: any): string {
        return `modifies entry-ticket by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteEntryTicket(@Param() params: any): string {
        return `deletes entry-ticket by id: #${params.id}`;
    }
}