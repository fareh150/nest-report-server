import type { TDocumentDefinitions } from 'pdfmake/interfaces';


export const getCommunityReport = (
): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: [`Hola community`],
  };

  return docDefinition;
};
