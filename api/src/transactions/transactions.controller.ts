import { Controller, Get, Req } from "@nestjs/common";

@Controller('transactions')
export class TransactionsController {
    @Get()
    findAll() {
        return 'transactions';
    }
}
