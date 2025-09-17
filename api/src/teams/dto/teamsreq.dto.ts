import { ApiProperty } from "@nestjs/swagger";

export class TeamReqDto {
    @ApiProperty()
    name: string;
}