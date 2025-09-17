import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationReqDto } from "./dto/donationreq.dto";
import { DonationsService } from './donations.service';


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
    async findDonation(@Param() params: any) {
        return this.donationsService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    async createDonation(@Body() createDonation: DonationReqDto) {
        return this.donationsService.postCreate(createDonation);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateDonation(@Param() params: any, @Body() updateDonation: DonationReqDto) {
        return this.donationsService.patchModify(params.id, updateDonation);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteDonation(@Param() params: any) {
        return this.donationsService.deleteRecord(params.id);
    }
}