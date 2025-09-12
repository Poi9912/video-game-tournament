import { Controller, Get, Post, Req, HttpCode, Patch, Delete, Param } from "@nestjs/common";

@Controller('transactions')
export class TransactionsController {
    @Get()
    findAll() {
        return 'transactions';
    }
    @Get(':id')
    @HttpCode(200)
    findTransactions(@Param() params: any): string {
        return `transactions by id: #${params.id}`;
    }
    @Post()
    @HttpCode(201)
    createTransactions(): string {
        return 'creates a transactions';
    }
    @Patch(':id')
    @HttpCode(200)
    updateTransactions(@Param() params: any): string {
        return `modifies transactions by id: #${params.id}`;
    }
    @Delete(':id')
    @HttpCode(200)
    deleteTransactions(@Param() params: any): string {
        return `deletes transactions by id: #${params.id}`;
    }
}
