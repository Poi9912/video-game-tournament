import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsISO8601, IsNotEmpty, IsEmail } from "class-validator";

export class UserReqDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of this User',
        example: 'user'
    })
    name: string;
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The name of this User',
        example: 'user@example.com'
    })
    email: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The password of this User',
        example: 'V3RySeCuR3p@S5W0rD*'
    })
    password: string;
    @IsISO8601()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Date in format ISO8601 of this donation',
        example: '2025-09-17T13:20:00.000Z'
    })
    register_date: string;
}