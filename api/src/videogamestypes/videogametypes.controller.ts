import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Videogame Type')
@Controller('videogames-types')
export class VideogametypesController {
    @Get()
    findAll() {
        return 'videogame-types';
    }
    @Get(':id')
    @HttpCode(200)
    findVideogameType(@Param() params: any): string {
        return `videogame-types by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createVideogameType(): string {
        return 'creates a videogame-types';
    }
    @Patch(':id')
    @HttpCode(200)
    updateVideogameType(@Param() params: any): string {
        return `modifies videogame-types by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteVideogameType(@Param() params: any): string {
        return `deletes videogame-types by id: #${params.id}`;
    }
}