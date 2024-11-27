import type {
  Content,
  TDocumentDefinitions,
  StyleDictionary,
} from 'pdfmake/interfaces';

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
    ],
  };
};
