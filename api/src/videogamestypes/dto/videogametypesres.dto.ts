import { ApiProperty } from "@nestjs/swagger";

export class VideogamesTypeResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Videogame Type',
        example: 32
    })
    id: number;
    @ApiProperty({
        description: 'The name of this Videogame Type',
        example: 95600
    })
    name: string;
    @ApiProperty({
        description: 'Indicates if the Videogame Type qualifies as competitive',
        example: false
    })
    competitive: boolean;
}