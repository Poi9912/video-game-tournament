import { ApiProperty } from "@nestjs/swagger";

export class TournamentResDto {
    @ApiProperty({
        description: 'The Unique-ID of this tournament',
        example: 7930
    })
    id: number;
    @ApiProperty({
        description: 'The name of the tournament',
        example: 'BTR LATAM duos no building for charity'
    })
    name: string;
    @ApiProperty({
        description: 'The description of the tournament/event',
        example: 'Battle Royale Tournament for duos in the LATAM region for foundrasing for the Charity of Better with NO cancer'
    })
    description: string;
    @ApiProperty({
        description: 'The Videogame ID of this tournament',
        example: 157383324
    })
    videogame_id: number;
    @ApiProperty({
        description: 'Starting date in format ISO8601 of this tournament',
        example: '2025-09-17T13:20:00.000Z'
    })
    start_date: string;
    @ApiProperty({
        description: 'Finishing date in format ISO8601 of this tournament',
        example: '2025-09-17T13:20:00.000Z'
    })
    finish_date: string;
    @ApiProperty({
        description: 'The User ID that is host for this Tournament',
        example: 8234
    })
    user_host: number;
}