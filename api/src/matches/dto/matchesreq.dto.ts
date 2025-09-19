import { ApiProperty } from "@nestjs/swagger";
import { IsISO8601, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MatchesReqDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Tournament ID of this Match',
        example: 157383324
    })
    tournament_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Team1 ID of this Match',
        example: 78123
    })
    team1_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Team1 ID of this Match',
        example: 5538
    })
    team2_id: number;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Date in format ISO8601 of this Match',
        example: '2025-09-17T13:20:00.000Z'
    })
    @IsString()
    @IsNotEmpty()
    event_date: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Result of the Match in String format T1:P-T2:P/W:TX',
        example: 'T1:19-T2:12/W:T1'
    })
    result: string;
}