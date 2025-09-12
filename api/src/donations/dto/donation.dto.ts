import { ApiProperty } from "@nestjs/swagger";

export class DonationDto {
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    date: string;
}