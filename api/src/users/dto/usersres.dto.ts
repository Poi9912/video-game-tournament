import { ApiProperty } from "@nestjs/swagger";

export class UserResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    register_date: string;
}