import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { PrizesService } from "./prizes.service";
import { PrizesReqDto } from "./dto/prizesreq.dto";

@Controller('prizes')
export class PrizesController {
    constructor(private readonly prizesService: PrizesService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.prizesService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findPrize(@Param() params: any) {
        return this.prizesService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createPrize(@Body() createPrize: PrizesReqDto) {
        return this.prizesService.postCreate(createPrize);
    }
    @Patch(':id')
    @HttpCode(200)
    async updatePrize(@Param() params: any, @Body() updatePrize: PrizesReqDto) {
        return this.prizesService.patchModify(params.id, updatePrize);
    }
    @Delete(':id')
    @HttpCode(200)
    async deletePrize(@Param() params: any) {
        return this.prizesService.deleteRecord(params.id);
    }
}
