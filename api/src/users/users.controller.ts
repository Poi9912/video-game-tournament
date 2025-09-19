import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserReqDto } from "./dto/usersreq.dto";
import UsersSwagger from "./users.swagger";

@Controller('users')
@UsersSwagger.ControllerDocs()
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    @HttpCode(200)
    @UsersSwagger.FindAllDocs()
    async findAll() {
        return this.usersService.getAll();
    }

    @Get(':id')
    @HttpCode(200)
    @UsersSwagger.FindOneDocs()
    async findUser(@Param() params: any) {
        return this.usersService.getById(params.id);
    }

    @Post()
    @HttpCode(201)
    @UsersSwagger.CreateDocs()
    async createUser(@Body() createUser: UserReqDto) {
        return this.usersService.postCreate(createUser);
    }

    @Patch(':id')
    @HttpCode(200)
    @UsersSwagger.UpdateDocs()
    async updateUser(@Param() params: any, @Body() updateUser: UserReqDto) {
        return this.usersService.patchModify(params.id, updateUser);
    }

    @Delete(':id')
    @HttpCode(204)
    @UsersSwagger.DeleteDocs()
    async deleteUser(@Param() params: any) {
        return this.usersService.deleteRecord(params.id);
    }
}