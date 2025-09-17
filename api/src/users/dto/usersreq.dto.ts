import { ApiProperty } from "@nestjs/swagger";

export class UserReqDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    register_date: string;
}