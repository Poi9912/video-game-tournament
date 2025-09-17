import { ApiProperty } from "@nestjs/swagger";

export class PlatformResDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
}