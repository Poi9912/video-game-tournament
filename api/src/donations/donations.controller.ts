import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationDto } from "./dto/donation.dto";


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
    asynccreateDonation(@Body() DonationDto: DonationDto) {
        return 'creates a donation';
    }
    @Patch(':id')
    @HttpCode(200)
    updateDonation(@Param() params: any, @Body() DonationDto: DonationDto) {
        return `modifies donation by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteDonation(@Param() params: any): string {
        return `deletes donation by id: #${params.id}`;
    }
}