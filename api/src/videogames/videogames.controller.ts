import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { VideogamesService } from "./videogames.service";
import { VideogameReqDto } from "./dto/videogamesreq.dto";

@Controller('videogames')
export class VideogamesController {
    constructor(private readonly videogamesService: VideogamesService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.videogamesService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findVideogame(@Param() params: any) {
        return this.videogamesService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createVideogame(@Body() createVideogame: VideogameReqDto) {
        return this.videogamesService.postCreate(createVideogame);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateVideogame(@Param() params: any, @Body() updateVideogame: VideogameReqDto) {
        return this.videogamesService.patchModify(params.id, updateVideogame);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteVideogame(@Param() params: any) {
        return this.videogamesService.deleteRecord(params.id);
    }
}