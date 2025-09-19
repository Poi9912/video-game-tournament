import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PrizesReqDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Tournament ID of this Prize',
        example: 157383324
    })
    tournament_id: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The quantity of this Prize',
        example: 1550000
    })
    quantity: number;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The Description of this Prize',
        example: '1rst Place winner in pairs tournament'
    })
    description: string;
}