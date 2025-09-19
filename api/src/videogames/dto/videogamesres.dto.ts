import { ApiProperty } from "@nestjs/swagger";

export class VideogameResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Videogame',
        example: 7820
    })
    id: number;
    @ApiProperty({
        description: 'The name of this videogame',
        example: 'Halo Infinite'
    })
    name: string;
    @ApiProperty({
        description: 'The Platform ID of this videogame',
        example: 2
    })
    platform_id: number;
    @ApiProperty({
        description: 'The Type ID of this videogame',
        example: 23
    })
    type_id: number;
}