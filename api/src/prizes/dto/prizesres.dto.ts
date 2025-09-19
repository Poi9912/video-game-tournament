import { ApiProperty } from "@nestjs/swagger";

export class PrizesResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Prize',
        example: 7913406278098405
    })
    id: number;
    @ApiProperty({
        description: 'The Tournament ID of this Prize',
        example: 157383324
    })
    tournament_id: number;
    @ApiProperty({
        description: 'The quantity of this Prize',
        example: 1550000
    })
    quantity: number;
    @ApiProperty({
        description: 'The Description of this Prize',
        example: '1rst Place winner in pairs tournament'
    })
    description: string;
}