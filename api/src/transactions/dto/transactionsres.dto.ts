import { ApiProperty } from "@nestjs/swagger";

export class TransactionResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    date: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    payment_method: string;
    @ApiProperty()
    payment_reference: string;
}