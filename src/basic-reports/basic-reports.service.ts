import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// ToDO: refactor

import PdfPrinter from 'pdfmake';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    //console.log('Connected to the database');
  }
  async hello() {
    return this.employees.findFirst();
  }
}
