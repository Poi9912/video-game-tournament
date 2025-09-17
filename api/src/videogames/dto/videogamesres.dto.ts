import { ApiProperty } from "@nestjs/swagger";

export class VideogameResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    platform_id: number;
    @ApiProperty()
    type_id: number;
}