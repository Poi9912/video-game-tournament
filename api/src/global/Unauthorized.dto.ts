import { ApiProperty } from "@nestjs/swagger";

export class UnauthorizedDto {
    @ApiProperty({
        description: 'A message indicating the outcome of the operation',
        example: 'Authorization not valid for this operation'
    })
    message: string
    @ApiProperty({
        description: 'The status code of the response',
        example: 200,
    })
    statusCode: number;
    @ApiProperty({
        description: 'Error description',
        example: 'Unauthorized'
    })
    error: string
}