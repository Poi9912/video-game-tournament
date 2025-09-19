import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { TeamResDto } from './dto/teamsres.dto';

const TeamIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Team',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TeamResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TeamResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: TeamResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Teams'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Teams' }),
      OkArrayResponse('List of all Teams'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Team by ID' }),
      TeamIdParam(),
      OkResponse('Team by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Team' }),
      CreatedResponse('New Team'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Team by ID' }),
      TeamIdParam(),
      OkResponse('Update Team by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Team by ID' }),
      TeamIdParam(),
      NoContentResponse('Delete Team by ID'),
    ),
};
