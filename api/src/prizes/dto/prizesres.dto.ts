import { ApiProperty } from "@nestjs/swagger";

export class PrizesResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    tournament_id: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    description: string;
}