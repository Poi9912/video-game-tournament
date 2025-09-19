import { ApiProperty } from "@nestjs/swagger";

export class PlatformResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Platform',
        example: 780
    })
    id: number;
    @ApiProperty({
        description: 'The platform Name where the videogame is available to play',
        example: 'steam'
    })
    name: string;
}