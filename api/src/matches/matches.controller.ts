import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { MatchesReqDto } from "./dto/matchesreq.dto";
import { MatchesService } from "./matches.service";


@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService){}

    @Get()
    async findAll() {
        return this.matchesService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findMatch(@Param() params: any) {
        return this.matchesService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createMatch(@Body() createMatch: MatchesReqDto) {
        return this.matchesService.postCreate(createMatch);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateMatch(@Param() params: any, @Body() updateMatch: MatchesReqDto) {
        return this.matchesService.patchModify(params.id, updateMatch);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteMatch(@Param() params: any) {
        return this.matchesService.deleteRecord(params.id);
    }
}