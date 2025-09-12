import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'users';
    }
    @Get(':id')
    @HttpCode(200)
    findUser(@Param() params: any): string {
        return `user by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createUser(): string {
        return 'creates a user';
    }
    @Patch(':id')
    @HttpCode(200)
    updateUser(@Param() params: any): string {
        return `modifies user by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteUser(@Param() params: any): string {
        return `deletes user by id: #${params.id}`;
    }
}