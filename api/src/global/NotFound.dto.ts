import { ApiProperty } from "@nestjs/swagger";

export class NotFoundDto {
    @ApiProperty({
        description: 'A message indicating the outcome of the operation',
        example: 'Resource not found for this operation'
    })
    message: string
    @ApiProperty({
        description: 'The status code of the response',
        example: 404,
    })
    statusCode: number;
    @ApiProperty({
        description: 'Error description',
        example: 'Not Found'
    })
    error: string
}