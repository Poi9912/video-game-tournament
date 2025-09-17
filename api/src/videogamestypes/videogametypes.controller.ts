import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { VideogametypesService } from "./videogametypes.service";
import { VideogamesTypeReqDto } from './dto/videogametypesreq.dto';

@ApiTags('Videogame Type')
@Controller('videogames-types')
export class VideogametypesController {
    constructor(private readonly videogamestypeService: VideogametypesService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.videogamestypeService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findVideogameType(@Param() params: any) {
        return this.videogamestypeService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createVideogameType(@Body() createVideogametype: VideogamesTypeReqDto) {
        return this.videogamestypeService.postCreate(createVideogametype);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateVideogameType(@Param() params: any, @Body() updateVideogametype: VideogamesTypeReqDto) {
        return this.videogamestypeService.patchModify(params.id, updateVideogametype);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteVideogameType(@Param() params: any) {
        return this.videogamestypeService.deleteRecord(params.id);
    }
}