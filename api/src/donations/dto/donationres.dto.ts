import { ApiProperty } from "@nestjs/swagger";

export class DonationResDto {
    @ApiProperty({
        description: 'The Unique-ID of this donation',
        example: 8891352746358
    })
    id: number;
    @ApiProperty({
        description: 'The User ID of this donation',
        example: 8234
    })
    user_id: number;
    @ApiProperty({
        description: 'The Tournament ID of this donation',
        example: 157383324
    })
    tournament_id: number;
    @ApiProperty({
        description: 'The quantity of this donation',
        example: 95600
    })
    quantity: number;
    @ApiProperty({
        description: 'Date in format ISO8601 of this donation',
        example: '2025-09-17T13:20:00.000Z'
    })
    date: string;
}