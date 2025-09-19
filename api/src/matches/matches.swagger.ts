import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { MatchesResDto } from './dto/matchesres.dto';

const MatchIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Match',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: MatchesResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: MatchesResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: MatchesResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Matches'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Matches' }),
      OkArrayResponse('List of all Matches'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Match by ID' }),
      MatchIdParam(),
      OkResponse('Match by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Match' }),
      CreatedResponse('New Match'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Match by ID' }),
      MatchIdParam(),
      OkResponse('Update Match by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Match by ID' }),
      MatchIdParam(),
      NoContentResponse('Delete Match by ID'),
    ),
};
