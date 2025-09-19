import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { VideogamesTypeResDto } from './dto/videogametypesres.dto';

const VideogameTypeIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the VideogameType',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: VideogamesTypeResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: VideogamesTypeResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: VideogamesTypeResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Videogame Types'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all VideogameTypes' }),
      OkArrayResponse('List of all VideogameTypes'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get VideogameType by ID' }),
      VideogameTypeIdParam(),
      OkResponse('VideogameType by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new VideogameType' }),
      CreatedResponse('New VideogameType'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a VideogameType by ID' }),
      VideogameTypeIdParam(),
      OkResponse('Update VideogameType by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a VideogameType by ID' }),
      VideogameTypeIdParam(),
      NoContentResponse('Delete VideogameType by ID'),
    ),
};
