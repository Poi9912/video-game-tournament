import { ApiProperty } from "@nestjs/swagger";

export class VideogamesTypeResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    competitive: boolean;
}