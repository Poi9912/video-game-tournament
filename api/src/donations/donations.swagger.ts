import { applyDecorators } from "@nestjs/common";
import { ApiParam, ApiResponse } from "@nestjs/swagger";
import { DonationResDto } from './dto/donationres.dto';

export const DonationsSwagger = {
    ApiIdParam: () => 
        ApiParam({ name: 'id', description: 'The unique ID of the Donation', required: true, type: 'string' })
    ,

    ApiOkArrayResponse: () => 
        ApiResponse({ status: 200, description: 'List of all donations', type: DonationResDto, isArray: true })
    ,

    ApiOkSingleResponse: () =>
        ApiResponse({ status: 200, description: 'Donation by ID', type: DonationResDto })
    ,

    ApiCreatedResponse: () =>
        ApiResponse({ status: 201, description: 'New Donation', type: DonationResDto })
    ,

    ApiNoContentResponse: () =>
        ApiResponse({ status: 204, description: 'Delete donation by ID' })
    ,
}

