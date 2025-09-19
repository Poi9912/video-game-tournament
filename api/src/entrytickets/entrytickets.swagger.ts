import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { EntryTicketResDto } from './dto/entryticketsres.dto';

const EntryTicketIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Entry Ticket',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: EntryTicketResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: EntryTicketResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: EntryTicketResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Tickets'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Entry Tickets' }),
      OkArrayResponse('List of all Entry Tickets'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Entry Ticket by ID' }),
      EntryTicketIdParam(),
      OkResponse('Entry Ticket by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Entry Ticket' }),
      CreatedResponse('New Entry Ticket'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Entry Ticket by ID' }),
      EntryTicketIdParam(),
      OkResponse('Update Entry Ticket by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Entry Ticket by ID' }),
      EntryTicketIdParam(),
      NoContentResponse('Delete Entry Ticket by ID'),
    ),
};
