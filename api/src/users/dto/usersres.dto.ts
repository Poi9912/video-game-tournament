import { ApiProperty } from "@nestjs/swagger";

export class UserResDto {
    @ApiProperty({
        description: 'The Unique-ID of this User',
        example: 710900
    })
    id: number;
    @ApiProperty(
        {description: 'The name of this User',
        example: 'user'}
    )
    name: string;
    @ApiProperty({
        description: 'The name of this User',
        example: 'user@example.com'
    })
    email: string;
    @ApiProperty({
        description: 'Date in format ISO8601 of this donation',
        example: '2025-09-17T13:20:00.000Z'
    })
    register_date: string;
}