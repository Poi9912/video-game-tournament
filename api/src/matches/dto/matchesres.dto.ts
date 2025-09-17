import { ApiProperty } from "@nestjs/swagger";

export class MatchesResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    team1_id: number;
    @ApiProperty()
    team2_id: number;
    @ApiProperty()
    event_date: string;
    @ApiProperty()
    result: string;
}