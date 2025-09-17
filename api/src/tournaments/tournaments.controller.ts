import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { TournamentsService } from "./tournaments.service";
import { TournamentReqDto } from "./dto/tournamentsreq.dto";

@Controller('tournaments')
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.tournamentsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findTourament(@Param() params: any) {
        return this.tournamentsService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createTourament(@Body() createTournament: TournamentReqDto) {
        return this.tournamentsService.postCreate(createTournament);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateTourament(@Param() params: any, @Body() updateTournament: TournamentReqDto) {
        return this.tournamentsService.patchModify(params.id, updateTournament);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteTourament(@Param() params: any) {
        return this.tournamentsService.deleteRecord(params.id);
    }
}
