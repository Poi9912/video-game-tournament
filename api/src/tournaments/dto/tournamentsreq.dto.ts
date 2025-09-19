import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsISO8601 } from "class-validator";

export class TournamentReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the tournament',
        example: 'BTR LATAM duos no building for charity'
    })
    name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The description of the tournament/event',
        example: 'Battle Royale Tournament for duos in the LATAM region for foundrasing for the Charity of Better with NO cancer'
    })
    description: string;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Videogame ID of this tournament',
        example: 157383324
    })
    videogame_id: number;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Starting date in format ISO8601 of this tournament',
        example: '2025-09-17T13:20:00.000Z'
    })
    start_date: string;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Finishing date in format ISO8601 of this tournament',
        example: '2025-09-17T13:20:00.000Z'
    })
    finish_date: string;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The User ID that is host for this Tournament',
        example: 8234
    })
    user_host: number;
}