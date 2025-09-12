import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('videogames')
export class VideogamesController {
    @Get()
    findAll() {
        return 'videogames';
    }
    @Get(':id')
    @HttpCode(200)
    findVideogame(@Param() params: any): string {
        return `videogame by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createVideogame(): string {
        return 'creates a videogame';
    }
    @Patch(':id')
    @HttpCode(200)
    updateVideogame(@Param() params: any): string {
        return `modifies videogame by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteVideogame(@Param() params: any): string {
        return `deletes videogame by id: #${params.id}`;
    }
}