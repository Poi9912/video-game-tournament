import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { TeamsService } from "./teams.service";
import { TeamReqDto } from "./dto/teamsreq.dto";

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.teamsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findTeams(@Param() params: any) {
        return this.teamsService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createTeams(@Body() createTeam: TeamReqDto) {
        return this.teamsService.postCreate(createTeam);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateTeams(@Param() params: any, @Body() updateTeam: TeamReqDto) {
        return this.teamsService.patchModify(params.id,updateTeam);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteTeams(@Param() params: any) {
        return this.teamsService.deleteRecord(params.id);
    }
}
