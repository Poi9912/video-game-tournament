import { ApiProperty } from "@nestjs/swagger";

export class InternalServerErrorDto {
    @ApiProperty({
        description: 'A message indicating the outcome of the operation',
        example: 'Internal Server Error'
    })
    message: string
    @ApiProperty({
        description: 'The status code of the response',
        example: 500,
    })
    statusCode: number;
}