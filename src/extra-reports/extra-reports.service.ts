import fs from 'fs';
import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHtmlContent } from 'src/helpers';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}
  getHtmlReport() {
    // get the code of the html file
    const html = fs.readFileSync('src/reports/html/basic-01.html', 'utf8');

    const content = getHtmlContent(html);

    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML Report',
        subtitle: 'This is a simple HTML report',
      }),
      content,
    };

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
