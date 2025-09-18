import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationReqDto } from './dto/donationreq.dto';
import { DonationsService } from './donations.service';
import { ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { DonationResDto } from "./dto/donationres.dto";


@Controller('donations')
export class DonationsController {
    constructor(private readonly donationsService: DonationsService){}

    @Get()
    @ApiOperation({ summary: 'get all donations' })
    @ApiResponse({ status: 200, description: 'List of all donations', type: DonationResDto, isArray: true })
    @HttpCode(200)
    async findAll() {
        return this.donationsService.getAll();
    }
    @Get(':id')
    @ApiParam({
      name: 'id',
      description: 'The unique ID of the Donation',
      required: true,
      type: 'string'
    })
    @ApiOperation({ summary: 'get donation by ID' })
    @ApiResponse({ status: 200, description: 'Donation by ID', type: DonationResDto })
    @HttpCode(200)
    async findDonation(@Param() params: any) {
        return this.donationsService.getById(params.id);
    }
    @Post()
    @ApiOperation({ summary: 'register new donation' })
    @ApiResponse({ status: 201, description: 'New Donation', type: DonationResDto })
    @HttpCode(201)
    async createDonation(@Body() createDonation: DonationReqDto) {
        return this.donationsService.postCreate(createDonation);
    }
    @Patch(':id')
    @ApiParam({
      name: 'id',
      description: 'The unique ID of the Donation',
      required: true,
      type: 'string'
    })
    @ApiOperation({ summary: 'updates a donation by ID' })
    @ApiResponse({ status: 200, description: 'Update donation by ID', type: DonationResDto })
    @HttpCode(200)
    async updateDonation(@Param() params: any, @Body() updateDonation: DonationReqDto) {
        return this.donationsService.patchModify(params.id, updateDonation);
    }
    @Delete(':id')
    @ApiParam({
      name: 'id',
      description: 'The unique ID of the Donation',
      required: true,
      type: 'string'
    })
    @ApiOperation({ summary: 'deletes a donation by ID' })
    @ApiResponse({ status: 204, description: 'Delete donation by ID'})
    @HttpCode(204)
    async deleteDonation(@Param() params: any) {
        return this.donationsService.deleteRecord(params.id);
    }
}