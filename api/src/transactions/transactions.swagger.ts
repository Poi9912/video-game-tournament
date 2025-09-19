import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { TransactionResDto } from './dto/transactionsres.dto';


const TransactionIdParam = () =>
  ApiParam({
    name: 'id',
    description: 'The unique ID of the Transaction',
    required: true,
    type: 'string',
  });

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TransactionResDto });

const OkArrayResponse = (description: string) =>
  ApiResponse({ status: 200, description, type: TransactionResDto, isArray: true });

const CreatedResponse = (description: string) =>
  ApiResponse({ status: 201, description, type: TransactionResDto });

const NoContentResponse = (description: string) =>
  ApiResponse({ status: 204, description });

const ControllerDocs = () => applyDecorators(ApiTags('Transactions'));

export default {
  ControllerDocs,

  FindAllDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get all Transactions' }),
      OkArrayResponse('List of all Transactions'),
    ),

  FindOneDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Get Transaction by ID' }),
      TransactionIdParam(),
      OkResponse('Transaction by ID'),
    ),

  CreateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Register new Transaction' }),
      CreatedResponse('New Transaction'),
    ),

  UpdateDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Updates a Transaction by ID' }),
      TransactionIdParam(),
      OkResponse('Update Transaction by ID'),
    ),

  DeleteDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Deletes a Transaction by ID' }),
      TransactionIdParam(),
      NoContentResponse('Delete Transaction by ID'),
    ),
};
