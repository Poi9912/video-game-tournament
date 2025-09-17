import { ApiProperty } from "@nestjs/swagger";

export class VideogameReqDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    platform_id: number;
    @ApiProperty()
    type_id: number;
}