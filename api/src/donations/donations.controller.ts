import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationReqDto } from "./dto/donationreq.dto";
import { DonationsService } from './donations.service';
import { DonationResDto } from './dto/donationres.dto';
import { map } from "rxjs";


@Controller('donations')
export class DonationsController {
    constructor(private readonly donationsService: DonationsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.donationsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    findDonation(@Param() params: any): string {
        return `donation by id: #${params.id}`;
    }

    @Post()
    @HttpCode(201)
    async createDonation(@Body() createDonation: DonationReqDto) {
        return this.donationsService.postCreate(createDonation);
    }
    @Patch(':id')
    @HttpCode(200)
    updateDonation(@Param() params: any, @Body() updateDonation: DonationReqDto) {
        return `modifies donation by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteDonation(@Param() params: any): string {
        return `deletes donation by id: #${params.id}`;
    }
}