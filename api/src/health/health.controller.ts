import { Controller, Get, Head, HttpCode, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('monitoring')
@Controller('health')
export class HealthController {
    @Head()
    @HttpCode(200)
    Health(): string {
        return '';
    }
}