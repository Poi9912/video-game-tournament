import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VideogameReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of this videogame',
        example: 'Halo Infinite'
    })
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Platform ID of this videogame',
        example: 2
    })
    platform_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Type ID of this videogame',
        example: 23
    })
    type_id: number;
}