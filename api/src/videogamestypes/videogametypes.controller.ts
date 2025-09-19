import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { VideogametypesService } from "./videogametypes.service";
import { VideogamesTypeReqDto } from './dto/videogametypesreq.dto';
import VideogametypesSwagger from "./videogametypes.swagger";

@Controller('videogames-types')
@VideogametypesSwagger.ControllerDocs()
export class VideogametypesController {
    constructor(private readonly videogamestypeService: VideogametypesService){}

    @Get()
    @HttpCode(200)
    @VideogametypesSwagger.FindAllDocs()
    async findAll() {
        return this.videogamestypeService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @VideogametypesSwagger.FindOneDocs()
    async findVideogameType(@Param() params: any) {
        return this.videogamestypeService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @VideogametypesSwagger.CreateDocs()
    async createVideogameType(@Body() createVideogametype: VideogamesTypeReqDto) {
        return this.videogamestypeService.postCreate(createVideogametype);
    }

    @Patch(':id')
    @HttpCode(200)
    @VideogametypesSwagger.UpdateDocs()
    async updateVideogameType(@Param() params: any, @Body() updateVideogametype: VideogamesTypeReqDto) {
        return this.videogamestypeService.patchModify(params.id, updateVideogametype);
    }

    @Delete(':id')
    @HttpCode(204)
    @VideogametypesSwagger.DeleteDocs()
    async deleteVideogameType(@Param() params: any) {
        return this.videogamestypeService.deleteRecord(params.id);
    }
}