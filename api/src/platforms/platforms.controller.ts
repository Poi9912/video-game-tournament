import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { PlatformsService } from "./platforms.service";
import { PlatformReqDto } from "./dto/platformreq.dto";

@Controller('platforms')
export class PlatformsController {
    constructor(private readonly platformsService: PlatformsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.platformsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findPlatform(@Param() params: any) {
        return this.platformsService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createPlatform(@Body() createPlatform: PlatformReqDto) {
        return this.platformsService.postCreate(createPlatform);
    }
    @Patch(':id')
    @HttpCode(200)
    async updatePlatform(@Param() params: any, @Body() updatePlatform: PlatformReqDto) {
        return this.platformsService.patchModify(params.id,updatePlatform);
    }
    @Delete(':id')
    @HttpCode(200)
    async deletePlatform(@Param() params: any) {
        return this.platformsService.deleteRecord(params.id);
    }
}
