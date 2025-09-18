import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsISO8601 } from "class-validator";

export class DonationReqDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The User ID of this donation',
        example: 8234
    })
    user_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Tournament ID of this donation',
        example: 157383324
    })
    tournament_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The quantity of this donation',
        example: 95600
    })
    quantity: number;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Date in format ISO8601 of this donation',
        example: '2025-09-17T13:20:00.000Z'
    })
    date: string;
}