import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserResDto } from './dto/usersres.dto';

const UserIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the User',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: UserResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: UserResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: UserResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Users'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Users' }),
      OkArrayResponse('List of all Users'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get User by ID' }),
      UserIdParam(),
      OkResponse('User by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new User' }),
      CreatedResponse('New User'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a User by ID' }),
      UserIdParam(),
      OkResponse('Update User by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a User by ID' }),
      UserIdParam(),
      NoContentResponse('Delete User by ID'),
    ),
};
