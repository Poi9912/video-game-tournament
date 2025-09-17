import { ApiProperty } from "@nestjs/swagger";

export class EntryTicketResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    total_price: number;
    @ApiProperty()
    sale_date: string;
    @ApiProperty()
    usage: boolean;
}