import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('teams')
export class TeamsController {
    @Get()
    findAll() {
        return 'teams';
    }
    @Get(':id')
    @HttpCode(200)
    findTeams(@Param() params: any): string {
        return `team by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createTeams(): string {
        return 'creates a team';
    }
    @Patch(':id')
    @HttpCode(200)
    updateTeams(@Param() params: any): string {
        return `modifies team by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteTeams(@Param() params: any): string {
        return `deletes team by id: #${params.id}`;
    }
}
