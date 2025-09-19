import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { TournamentResDto } from './dto/tournamentsres.dto';

const TournamentIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Tournament',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TournamentResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TournamentResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: TournamentResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Tournaments'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Tournaments' }),
      OkArrayResponse('List of all Tournaments'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Tournament by ID' }),
      TournamentIdParam(),
      OkResponse('Tournament by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Tournament' }),
      CreatedResponse('New Tournament'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Tournament by ID' }),
      TournamentIdParam(),
      OkResponse('Update Tournament by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Tournament by ID' }),
      TournamentIdParam(),
      NoContentResponse('Delete Tournament by ID'),
    ),
};
