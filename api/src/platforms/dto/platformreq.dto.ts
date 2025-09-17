import { ApiProperty } from "@nestjs/swagger";

export class PlatformReqDto {
    @ApiProperty()
    name: string;
}