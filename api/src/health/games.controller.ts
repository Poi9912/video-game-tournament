import { Controller, Get, Head, HttpCode, Req } from "@nestjs/common";

@Controller('health')
export class HealthController {
    @Head()
    @HttpCode(200)
    Health(): string {
        return '';
    }
}