import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 12,
    },
    content: [
      {
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            alignment: 'center',
            text: ' Forest Admin Community Report\nRUT: 123456789\nCamino montaña 123\nTelefono 123456789',
          },
        ],
      },
    ],
  };

  return docDefinition;
};
