import { ApiProperty } from "@nestjs/swagger";

export class ForbiddenDto {
    @ApiProperty({
        description: 'A message indicating the outcome of the operation',
        example: 'Does not have permissions for this resource'
    })
    message: string
    @ApiProperty({
        description: 'The status code of the response',
        example: 403,
    })
    statusCode: number;
    @ApiProperty({
        description: 'Error description',
        example: 'Forbidden'
    })
    error: string
}