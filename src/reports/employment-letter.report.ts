import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: ['CONSTANCIA DE EMPLEO'],
  };
  return docDefinition;
};
