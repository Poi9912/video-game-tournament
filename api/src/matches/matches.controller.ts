import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('matches')
export class MatchesController {
    @Get()
    findAll() {
        return 'matches';
    }
    @Get(':id')
    @HttpCode(200)
    findMatch(@Param() params: any): string {
        return `match by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createMatch(): string {
        return 'creates a match';
    }
    @Patch(':id')
    @HttpCode(200)
    updateMatch(@Param() params: any): string {
        return `modifies match by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteMatch(@Param() params: any): string {
        return `deletes match by id: #${params.id}`;
    }
}