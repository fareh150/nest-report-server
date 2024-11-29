import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getStatisticsReport = ({}): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: ['Hola mundo'],
  };

  return docDefinition;
};
