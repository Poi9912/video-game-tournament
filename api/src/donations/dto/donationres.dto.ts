import { ApiProperty } from "@nestjs/swagger";

export class DonationResDto {
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
}