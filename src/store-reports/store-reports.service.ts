import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getBasicChartSvgReport, orderByIdReport } from 'src/reports';
import { getStatisticsReport } from 'src/reports/statistics.report';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async getOrderByIdReport(orderId: number) {
    const order = await this.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        customers: true,
        order_details: {
          include: {
            products: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with id ${orderId} not found`);
    }

    const docDefinition = orderByIdReport({
      data: order as any,
    });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async getSvgChart() {
    const docDefinition = await getBasicChartSvgReport();

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  async getStatistics() {
    const topCountries = await this.customers.groupBy({
      by: ['country'],
      _count: {
        country: true,
      },
      orderBy: {
        _count: {
          country: 'desc',
        },
      },
      take: 10,
    });

    const topCountryData = topCountries.map((country) => ({
      country: country.country,
      customers: country._count.country,
    }));

    const docDefinition = await getStatisticsReport({
      topCountries: topCountryData,
    });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
