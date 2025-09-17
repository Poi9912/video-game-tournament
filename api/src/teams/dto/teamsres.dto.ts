import { ApiProperty } from "@nestjs/swagger";

export class TeamResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
}