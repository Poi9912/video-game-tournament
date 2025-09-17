import { ApiProperty } from "@nestjs/swagger";

export class VideogamesTypeReqDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    competitive: boolean;
}