import type {
  Content,
  TDocumentDefinitions,
  StyleDictionary,
} from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

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
      {
        text: 'Tucan Code',
        style: 'header',
      },
      {
        columns: [
          {
            text: `15 Montgomery Str, Suite 100,
                    Ottawa ON K2Y 9X1, CANADA
                    BN: 12783671823
                    https://devtalles.com`,
          },
          {
            text: `Recibo No. 3213213541 \nFecha: ${DateFormatter.getDDMMYYYY(new Date())}\nPagar antes de : ${DateFormatter.getDDMMYYYY(new Date())}`,
            alignment: 'right',
          },
        ],
      },
    ],
  };
};
