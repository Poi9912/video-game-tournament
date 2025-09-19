import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { PlatformResDto } from './dto/platformres.dto';

const PlatformIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Platform',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: PlatformResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: PlatformResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: PlatformResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Platforms'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Platforms' }),
      OkArrayResponse('List of all Platforms'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Platform by ID' }),
      PlatformIdParam(),
      OkResponse('Platform by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Platform' }),
      CreatedResponse('New Platform'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Platform by ID' }),
      PlatformIdParam(),
      OkResponse('Update Platform by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Platform by ID' }),
      PlatformIdParam(),
      NoContentResponse('Delete Platform by ID'),
    ),
};
