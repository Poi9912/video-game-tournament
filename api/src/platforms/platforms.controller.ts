import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";
@Controller('platforms')
export class PlatformsController {
    @Get()
    findAll() {
        return 'platforms';
    }
    @Get(':id')
    @HttpCode(200)
    findPlatform(@Param() params: any): string {
        return `platform by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createPlatform(): string {
        return 'creates a platform';
    }
    @Patch(':id')
    @HttpCode(200)
    updatePlatform(@Param() params: any): string {
        return `modifies platform by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deletePlatform(@Param() params: any): string {
        return `deletes platform by id: #${params.id}`;
    }
}
