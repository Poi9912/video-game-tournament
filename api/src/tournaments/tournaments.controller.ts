import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('tournaments')
export class TournamentsController {
    @Get()
    findAll() {
        return 'tournaments';
    }
    @Get(':id')
    @HttpCode(200)
    findTourament(@Param() params: any): string {
        return `tourament by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createTourament(): string {
        return 'creates a tourament';
    }
    @Patch(':id')
    @HttpCode(200)
    updateTourament(@Param() params: any): string {
        return `modifies tourament by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteTourament(@Param() params: any): string {
        return `deletes tourament by id: #${params.id}`;
    }
}
