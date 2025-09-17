import { ApiProperty } from "@nestjs/swagger";

export class PrizesReqDto {
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    description: string;
}