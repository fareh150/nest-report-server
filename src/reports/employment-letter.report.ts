import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

const style: StyleDictionary = {
  header: {
    fontSize: 18,
    bold: true,
    alignment: 'center',
  },
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: style,
    content: [
      {
        text: 'Employment Letter',
        style: 'header',
      },
    ],
  };
  return docDefinition;
};
