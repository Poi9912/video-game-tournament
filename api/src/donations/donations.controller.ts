import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationReqDto } from './dto/donationreq.dto';
import { DonationsService } from './donations.service';
import { ApiOperation } from '@nestjs/swagger';
import { DonationsSwagger } from "./donations.swagger";

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Get()
  @ApiOperation({ summary: 'get all donations' })
  @DonationsSwagger.ApiOkArrayResponse()
  @HttpCode(200)
  async findAll() {
    return this.donationsService.getAll();
  }

  @Get(':id')
  @DonationsSwagger.ApiIdParam()
  @DonationsSwagger.ApiOkSingleResponse()
  @ApiOperation({ summary: 'get donation by ID' })
  @HttpCode(200)
  async findDonation(@Param() params: any) {
    return this.donationsService.getById(params.id);
  }

  @Post()
  @DonationsSwagger.ApiOkSingleResponse()
  @ApiOperation({ summary: 'register new donation' })
  @HttpCode(201)
  async createDonation(@Body() createDonation: DonationReqDto) {
    return this.donationsService.postCreate(createDonation);
  }

  @Patch(':id')
  @DonationsSwagger.ApiIdParam()
  @DonationsSwagger.ApiOkSingleResponse()
  @HttpCode(200)
  async updateDonation(
    @Param() params: any,
    @Body() updateDonation: DonationReqDto,
  ) {
    return this.donationsService.patchModify(params.id, updateDonation);
  }

  @Delete(':id')
  @DonationsSwagger.ApiIdParam()
  @DonationsSwagger.ApiNoContentResponse()
  @ApiOperation({ summary: 'deletes a donation by ID' })
  @HttpCode(204)
  async deleteDonation(@Param() params: any) {
    return this.donationsService.deleteRecord(params.id);
  }
}
