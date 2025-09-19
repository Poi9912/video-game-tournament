import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { VideogamesService } from "./videogames.service";
import { VideogameReqDto } from "./dto/videogamesreq.dto";
import VideogamesSwagger from "./videogames.swagger";

@Controller('videogames')
@VideogamesSwagger.ControllerDocs()
export class VideogamesController {
    constructor(private readonly videogamesService: VideogamesService){}

    @Get()
    @HttpCode(200)
    @VideogamesSwagger.FindAllDocs()
    async findAll() {
        return this.videogamesService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @VideogamesSwagger.FindOneDocs()
    async findVideogame(@Param() params: any) {
        return this.videogamesService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @VideogamesSwagger.CreateDocs()
    async createVideogame(@Body() createVideogame: VideogameReqDto) {
        return this.videogamesService.postCreate(createVideogame);
    }

    @Patch(':id')
    @HttpCode(200)
    @VideogamesSwagger.UpdateDocs()
    async updateVideogame(@Param() params: any, @Body() updateVideogame: VideogameReqDto) {
        return this.videogamesService.patchModify(params.id, updateVideogame);
    }

    @Delete(':id')
    @HttpCode(204)
    @VideogamesSwagger.DeleteDocs()
    async deleteVideogame(@Param() params: any) {
        return this.videogamesService.deleteRecord(params.id);
    }
}