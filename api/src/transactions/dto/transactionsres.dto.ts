import { ApiProperty } from "@nestjs/swagger";

export class TransactionResDto {
    @ApiProperty({
        description: 'The Unique-ID of this Transaction',
        example: 8891352746358
    })
    id: number;
    @ApiProperty({
        description: 'The User ID of this Transaction',
        example: 175038294613
    })
    user_id: number;
    @ApiProperty({
        description: 'The User ID of this Transaction',
        example: 76164
    })
    tournament_id: number;
    @ApiProperty({
        description: 'The quantity of this Transaction',
        example: 95600
    })
    quantity: number;
    @ApiProperty({
        description: 'Date in format ISO8601 of this donation',
        example: '2025-09-17T13:20:00.000Z'
    })
    date: string;
    @ApiProperty({
        description: 'The description fo this Transaction',
        example: 'PENDING'
    })
    status: string;
    @ApiProperty({
        description: 'The payment method fo this Transaction',
        example: 'CREDIT-CARD'
    })
    payment_method: string;
    @ApiProperty({
        description: 'The payment reference fo this Transaction',
        example: 'KIALL7824606574-001324-PGA'
    })
    payment_reference: string;
}