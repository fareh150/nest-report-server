import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    content: ['Reporte basico'],
  };
};
