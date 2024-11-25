import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getHelloWorldReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: ['Hola mundo'],
  };

  return docDefinition;
};
