import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsISO8601 } from "class-validator";

export class EntryTicketReqDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The User ID of this Entry Ticket',
        example: 820007962
    })
    user_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Tournament ID of this Entry Ticket',
        example: 357690416
    })
    tournament_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The quantity of uses from this Entry Ticket during the tournament',
        example: 1
    })
    quantity: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The price of the Entry Ticket',
        example: 98400
    })
    total_price: number;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Date in format ISO8601 of this Entry Ticket',
        example: '2025-09-17T13:20:00.000Z'
    })
    sale_date: string;
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Indicates if the Entry Tickets have been used during the tournament',
        example: true
    })
    usage: boolean;
}