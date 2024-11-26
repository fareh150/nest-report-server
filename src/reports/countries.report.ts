import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';

export const getCountryReport = (): TDocumentDefinitions => {
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: 'Countries Report',
     // subTitle: 'List of countries',
    }),
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['first', 'second', 'third', 'the last one'],
            ['value 1', 'value 2', 'value 3', 'value 4'],
            [{ text: 'Bold value', bold: true }, 'val 2', 'val 3', 'val 4'],
          ],
        },
      },
    ],
  };
};
