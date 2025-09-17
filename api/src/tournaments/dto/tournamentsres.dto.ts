import { ApiProperty } from "@nestjs/swagger";

export class TournamentResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    videogame_id: number;
    @ApiProperty()
    start_date: string;
    @ApiProperty()
    finish_date: string;
    @ApiProperty()
    user_host: number;
}