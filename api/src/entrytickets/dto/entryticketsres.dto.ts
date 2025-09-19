import { ApiProperty } from "@nestjs/swagger";

export class EntryTicketResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Entry Ticket',
        example: 987653498078900
    })
    id: number;
    @ApiProperty({
        description: 'The User ID of this Entry Ticket',
        example: 820007962
    })
    user_id: number;
    @ApiProperty({
        description: 'The Tournament ID of this Entry Ticket',
        example: 90814515
    })
    tournament_id: number;
    @ApiProperty({
        description: 'The quantity of uses from this Entry Ticket during the tournament',
        example: 1
    })
    quantity: number;
    @ApiProperty({
        description: 'The price of the Entry Ticket',
        example: 98400
    })
    total_price: number;
    @ApiProperty({
        description: 'Date in format ISO8601 of this Entry Ticket',
        example: '2025-09-17T13:20:00.000Z'
    })
    sale_date: string;
    @ApiProperty({
        description: 'Indicates if the Entry Tickets have been used during the tournament',
        example: true
    })
    usage: boolean;
}