import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class TeamReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of the Team',
        example: 'Centinels'
    })
    name: string;
}