import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  getOrderByIdReport(orderId: string) {
    const docDefinition = {
      content: [
        `Order ID: ${orderId}`,
        `Order Date: ${new Date().toDateString()}`,
        `Order Status: Completed`,
        `Order Total: $100.00`,
      ],
    };

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
