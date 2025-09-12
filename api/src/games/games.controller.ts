import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('games')
export class GamesController {
    @Get()
    findAll() {
        return 'Games';
    }
    @Get(':id')
    @HttpCode(200)
    findGame(@Param() params: any): string {
        return `game by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createGame(): string {
        return 'creates a game';
    }
    @Patch(':id')
    @HttpCode(200)
    updateGame(@Param() params: any): string {
        return `modifies game by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteGame(@Param() params: any): string {
        return `deletes game by id: #${params.id}`;
    }
}