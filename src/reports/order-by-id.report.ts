import type {
  Content,
  TDocumentDefinitions,
  StyleDictionary,
} from 'pdfmake/interfaces';
import { CurrencyFormatter, DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 20,
    bold: true,
    margin: [0, 30, 0, 0],
  },
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    styles,
    header: logo,
    pageMargins: [40, 70, 40, 60],
    content: [
      // Header
      {
        text: 'Tucan Code',
        style: 'header',
      },
      // Address and recipe
      {
        columns: [
          {
            text: `15 Montgomery Str, Suite 100,
                    Ottawa ON K2Y 9X1, CANADA
                    BN: 12783671823
                    https://devtalles.com`,
          },
          {
            text: [
              {
                text: `Recibo No. 3213213541 \n`,
                bold: true,
              },
              `Fecha: ${DateFormatter.getDDMMYYYY(new Date())}\nPagar antes de : ${DateFormatter.getDDMMYYYY(new Date())}`,
            ],
            alignment: 'right',
          },
        ],
      },
      // Qr code
      {
        qr: 'youtube.com',
        fit: 100,
        alignment: 'right',
      },
      // Client direction
      {
        text: [
          {
            text: 'Cobrar a: \n',
            bold: true,
          },
          `Razón Social: Richter Supermarkt
            Michael Holz
            Grenzacherweg 237`,
        ],
      },
      // Tabla del detalle de la orden
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
            [
              '1',
              'Producto 1',
              '1',
              '100',
              {
                text: CurrencyFormatter.formatCurrency(100),
                alignment: 'right',
              },
            ],
            [
              '2',
              'Producto 2',
              '2',
              '200',
              {
                text: CurrencyFormatter.formatCurrency(1500),
                alignment: 'right',
              },
            ],
            [
              '3',
              'Producto 3',
              '3',
              '300',
              {
                text: CurrencyFormatter.formatCurrency(900),
                alignment: 'right',
              },
            ],
          ],
        },
      },
    ],
  };
};
