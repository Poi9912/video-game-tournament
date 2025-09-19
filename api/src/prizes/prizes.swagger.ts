import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { PrizesResDto } from './dto/prizesres.dto';


const PrizeIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Prize',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: PrizesResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: PrizesResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: PrizesResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Prizes'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Prizes' }),
      OkArrayResponse('List of all Prizes'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Prize by ID' }),
      PrizeIdParam(),
      OkResponse('Prize by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Prize' }),
      CreatedResponse('New Prize'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Prize by ID' }),
      PrizeIdParam(),
      OkResponse('Update Prize by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Prize by ID' }),
      PrizeIdParam(),
      NoContentResponse('Delete Prize by ID'),
    ),
};
