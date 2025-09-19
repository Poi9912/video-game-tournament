import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { MatchesReqDto } from "./dto/matchesreq.dto";
import { MatchesService } from "./matches.service";
import MatchesSwagger from "./matches.swagger";

@Controller('matches')
@MatchesSwagger.ControllerDocs()
export class MatchesController {
    constructor(private readonly matchesService: MatchesService){}

    @Get()
    @HttpCode(200)
    @MatchesSwagger.FindAllDocs()
    async findAll() {
        return this.matchesService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    @MatchesSwagger.FindOneDocs()
    async findMatch(@Param() params: any) {
        return this.matchesService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @MatchesSwagger.CreateDocs()
    async createMatch(@Body() createMatch: MatchesReqDto) {
        return this.matchesService.postCreate(createMatch);
    }

    @Patch(':id')
    @HttpCode(200)
    @MatchesSwagger.UpdateDocs()
    async updateMatch(@Param() params: any, @Body() updateMatch: MatchesReqDto) {
        return this.matchesService.patchModify(params.id, updateMatch);
    }

    @Delete(':id')
    @HttpCode(204)
    @MatchesSwagger.DeleteDocs()
    async deleteMatch(@Param() params: any) {
        return this.matchesService.deleteRecord(params.id);
    }
}