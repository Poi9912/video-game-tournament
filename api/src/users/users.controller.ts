import { Controller, Get, Req } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'users';
    }
}