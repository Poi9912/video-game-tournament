import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { VideogameResDto } from './dto/videogamesres.dto';

const VideogameIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Videogame',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: VideogameResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: VideogameResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: VideogameResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Videogames'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Videogames' }),
      OkArrayResponse('List of all Videogames'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Videogame by ID' }),
      VideogameIdParam(),
      OkResponse('Videogame by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Videogame' }),
      CreatedResponse('New Videogame'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Videogame by ID' }),
      VideogameIdParam(),
      OkResponse('Update Videogame by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Videogame by ID' }),
      VideogameIdParam(),
      NoContentResponse('Delete Videogame by ID'),
    ),
};
