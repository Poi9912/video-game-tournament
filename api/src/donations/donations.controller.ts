import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { DonationReqDto } from './dto/donationreq.dto';
import { DonationsService } from './donations.service';
import DonationsSwagger from "./donations.swagger";

@Controller('donations')
@DonationsSwagger.ControllerDocs()
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Get()
  @HttpCode(200)
  @DonationsSwagger.FindAllDocs()
  async findAll() {
    return this.donationsService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  @DonationsSwagger.FindOneDocs()
  async findDonation(@Param() params: any) {
    return this.donationsService.getById(params.id);
  }

  @Post()
  @HttpCode(201)
  @DonationsSwagger.CreateDocs()
  async createDonation(@Body() createDonation: DonationReqDto) {
    return this.donationsService.postCreate(createDonation);
  }

  @Patch(':id')
  @HttpCode(200)
  @DonationsSwagger.UpdateDocs()
  async updateDonation(@Param() params: any, @Body() updateDonation: DonationReqDto) {
    return this.donationsService.patchModify(params.id, updateDonation);
  }

  @Delete(':id')
  @HttpCode(204)
  @DonationsSwagger.DeleteDocs()
  async deleteDonation(@Param() params: any) {
    return this.donationsService.deleteRecord(params.id);
  }
}
