import fs from 'fs';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

const svgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    return {
      content: [
        {
          svg: svgContent,
          width: 200,
          fit: [100, 100],
        },
      ],
    };
  };
