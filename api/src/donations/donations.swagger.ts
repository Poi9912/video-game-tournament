import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { DonationResDto } from './dto/donationres.dto';

const DonationIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Donation',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: DonationResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: DonationResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: DonationResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Donations'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all donations' }),
      OkArrayResponse('List of all donations'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get donation by ID' }),
      DonationIdParam(),
      OkResponse('Donation by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new donation' }),
      CreatedResponse('New Donation'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a donation by ID' }),
      DonationIdParam(),
      OkResponse('Update donation by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a donation by ID' }),
      DonationIdParam(),
      NoContentResponse('Delete donation by ID'),
    ),
};
