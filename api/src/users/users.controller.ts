import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserReqDto } from "./dto/usersreq.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.usersService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findUser(@Param() params: any) {
        return this.usersService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createUser(@Body() createUser: UserReqDto) {
        return this.usersService.postCreate(createUser);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateUser(@Param() params: any, @Body() updateUser: UserReqDto) {
        return this.usersService.patchModify(params.id, updateUser);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteUser(@Param() params: any) {
        return this.usersService.deleteRecord(params.id);
    }
}