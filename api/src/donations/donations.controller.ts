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
    findGame(@Param() params: any): string {
        return `donation by id: #${params.id}`;
    }

    @Post()
    @HttpCode(201)
    createDonation(): string {
        return 'creates a donation';
    }
    @Patch()
    @HttpCode(200)
    updateDonation(): string {
        return 'modifies a donation';
    }
    @Delete()
    @HttpCode(200)
    deleteDonation(): string {
        return 'deletes donation';
    }
}