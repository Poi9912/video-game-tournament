import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PlatformReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The platform Name where the videogame is available to play',
        example: 'steam'
    })
    name: string;
}