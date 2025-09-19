import { ApiProperty } from "@nestjs/swagger";

export class MatchesResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Match',
        example: 98713512007
    })
    id: number;
    @ApiProperty({
        description: 'The Tournament ID of this Match',
        example: 157383324
    })
    tournament_id: number;
    @ApiProperty({
        description: 'The Team1 ID of this Match',
        example: 78123
    })
    team1_id: number;
    @ApiProperty({
        description: 'The Team1 ID of this Match',
        example: 5538
    })
    team2_id: number;
    @ApiProperty({
        description: 'Date in format ISO8601 of this Match',
        example: '2025-09-17T13:20:00.000Z'
    })
    event_date: string;
    @ApiProperty({
        description: 'The Result of the Match in String format T1:P-T2:P/W:TX',
        example: 'T1:19-T2:12/W:T1'
    })
    result: string;
}