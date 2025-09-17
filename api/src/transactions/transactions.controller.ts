import { Controller, Get, Post, Req, Res, HttpCode, Patch, Delete, Param, Body } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { TransactionReqDto } from "./dto/transactionsreq.dto";

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService){}

    @Get()
    @HttpCode(200)
    async findAll() {
        return this.transactionsService.getAll();
    }
    @Get(':id')
    @HttpCode(200)
    async findTransactions(@Param() params: any) {
        return this.transactionsService.getById(params.id);
    }
    @Post()
    @HttpCode(201)
    async createTransactions(@Body() createTransaction: TransactionReqDto) {
        return this.transactionsService.postCreate(createTransaction);
    }
    @Patch(':id')
    @HttpCode(200)
    async updateTransactions(@Param() params: any, @Body() updateTransaction: TransactionReqDto) {
        return this.transactionsService.patchModify(params.id, updateTransaction);
    }
    @Delete(':id')
    @HttpCode(200)
    async deleteTransactions(@Param() params: any) {
        return this.transactionsService.deleteRecord(params.id);
    }
}
