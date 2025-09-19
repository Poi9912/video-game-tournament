import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { PrizesService } from "./prizes.service";
import { PrizesReqDto } from "./dto/prizesreq.dto";
import PrizesSwagger from "./prizes.swagger";

@Controller('prizes')
@PrizesSwagger.ControllerDocs()
export class PrizesController {
    constructor(private readonly prizesService: PrizesService){}

    @Get()
    @HttpCode(200)
    @PrizesSwagger.FindAllDocs()
    async findAll() {
        return this.prizesService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @PrizesSwagger.FindOneDocs()
    async findPrize(@Param() params: any) {
        return this.prizesService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @PrizesSwagger.CreateDocs()
    async createPrize(@Body() createPrize: PrizesReqDto) {
        return this.prizesService.postCreate(createPrize);
    }

    @Patch(':id')
    @HttpCode(200)
    @PrizesSwagger.UpdateDocs()
    async updatePrize(@Param() params: any, @Body() updatePrize: PrizesReqDto) {
        return this.prizesService.patchModify(params.id, updatePrize);
    }

    @Delete(':id')
    @HttpCode(204)
    @PrizesSwagger.DeleteDocs()
    async deletePrize(@Param() params: any) {
        return this.prizesService.deleteRecord(params.id);
    }
}
