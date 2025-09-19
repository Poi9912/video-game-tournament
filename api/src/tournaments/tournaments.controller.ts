import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { TournamentsService } from "./tournaments.service";
import { TournamentReqDto } from "./dto/tournamentsreq.dto";
import TournamentsSwagger from "./tournaments.swagger";

@Controller('tournaments')
@TournamentsSwagger.ControllerDocs()
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService){}

    @Get()
    @HttpCode(200)
    @TournamentsSwagger.FindAllDocs()
    async findAll() {
        return this.tournamentsService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @TournamentsSwagger.FindOneDocs()
    async findTourament(@Param() params: any) {
        return this.tournamentsService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @TournamentsSwagger.CreateDocs()
    async createTourament(@Body() createTournament: TournamentReqDto) {
        return this.tournamentsService.postCreate(createTournament);
    }

    @Patch(':id')
    @HttpCode(200)
    @TournamentsSwagger.UpdateDocs()
    async updateTourament(@Param() params: any, @Body() updateTournament: TournamentReqDto) {
        return this.tournamentsService.patchModify(params.id, updateTournament);
    }

    @Delete(':id')
    @HttpCode(204)
    @TournamentsSwagger.DeleteDocs()
    async deleteTourament(@Param() params: any) {
        return this.tournamentsService.deleteRecord(params.id);
    }
}
