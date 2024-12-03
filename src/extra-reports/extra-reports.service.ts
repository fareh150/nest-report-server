import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}
  getHtmlReport() {
    const docDefinition = getHelloWorldReport({ name: 'Fareh Romero' });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
