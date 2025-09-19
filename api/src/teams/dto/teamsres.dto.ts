import { ApiProperty } from "@nestjs/swagger";

export class TeamResDto {
    @ApiProperty({
        description: 'The User ID of this Team',
        example: 421
    })
    id: number;
    @ApiProperty({
        description: 'The name of the Team',
        example: 'Centinels'
    })
    name: string;
}