import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";
@Controller('prizes')
export class PrizesController {
    @Get()
    findAll() {
        return 'prizes';
    }
    @Get(':id')
    @HttpCode(200)
    findPrize(@Param() params: any): string {
        return `prize by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createPrize(): string {
        return 'creates a prize';
    }
    @Patch(':id')
    @HttpCode(200)
    updatePrize(@Param() params: any): string {
        return `modifies prize by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deletePrize(@Param() params: any): string {
        return `deletes prize by id: #${params.id}`;
    }
}
