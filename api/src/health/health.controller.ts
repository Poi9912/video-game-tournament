import { Controller, Get, Head, HttpCode, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import HealthSwagger from "./health.swagger";

@Controller('health')
@HealthSwagger.ControllerDocs()
export class HealthController {
    @Head()
    @HttpCode(200)
    @HealthSwagger.HealthDocs()
    Health(): string {
        return 'Api is up';
    }
}