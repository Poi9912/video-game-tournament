import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('games')
@Controller('donations')
export class DonationsController {
    @Get()
    @HttpCode(200)
    findAll(): string {
        return 'donations';
    }
    @Get(':id')
    @HttpCode(200)
    findDonation(@Param() params: any): string {
        return `donation by id: #${params.id}`;
    }

    @Post()
    @HttpCode(201)
    createDonation(): string {
        return 'creates a donation';
    }
    @Patch(':id')
    @HttpCode(200)
    updateDonation(@Param() params: any): string {
        return `modifies donation by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteDonation(@Param() params: any): string {
        return `deletes donation by id: #${params.id}`;
    }
}