import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class VideogamesTypeReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of this Videogame Type',
        example: 95600
    })
    name: string;
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Indicates if the Videogame Type qualifies as competitive',
        example: false
    })
    competitive: boolean;
}