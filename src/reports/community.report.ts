import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 12,
    },
    content: [
      // logo - Dirección - Numero De orden
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
          {
            alignment: 'right',
            width: 140,
            layout: 'borderBlue',
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['No. Orden', '123456'],
                        ['Fecha', '12/12/2021'],
                        ['Hora', '12:00'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      // Horizontal Line
      {
        margin: [0, 10],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 520,
            y2: 5,
            lineWidth: 1,
            lineColor: '3a4546',
          },
        ],
      },
      // Detalles del cliente
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del cliente',
                fillColor: '#5775e1',
                color: 'white',
                colSpan: 4,
                border: [false, false, false, false], // para elegir que borde mostramos
              },
              {},
              {},
              {},
            ],
          ],
        },
      },
    ],
  };

  return docDefinition;
};
