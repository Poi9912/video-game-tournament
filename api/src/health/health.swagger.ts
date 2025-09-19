import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

const OkResponse = (description: string) =>
  ApiResponse({ status: 200, description });

const ControllerDocs = () => applyDecorators(ApiTags('Monitoring'));

export default {
  ControllerDocs,

  HealthDocs: () =>
    applyDecorators(
      ApiOperation({ summary: 'Prove for API health' }),
      OkResponse('Endpoint for API health proving'),
    ),
};
