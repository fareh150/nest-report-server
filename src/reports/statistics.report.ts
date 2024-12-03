import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart, getLineChart } from './charts';
import { headerSection } from './sections/header.section';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subtitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const [donutChart, lineChart] = await Promise.all([
    getDonutChart({
      entries: options.topCountries.map((country) => ({
        label: country.country,
        value: country.customers,
      })),
      showTitle: true,
      position: 'left',
    }),
    getLineChart(),
  ]);

  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 100, 40, 60],
    header: headerSection({
      title: options.title ?? 'Estadísticas',
      subtitle: options.subtitle ?? 'Reporte de estadísticas',
    }),
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: 'Top 10 países con más clientes',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 320,
              },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['Pais', 'Clientes'],
                ...options.topCountries.map((country) => [
                  country.country,
                  country.customers,
                ]),
              ],
            },
          },
        ],
      },
      {
        image: lineChart,
        width: 500,
        margin: [0, 20, 0, 0],
      },
    ],
  };
  // min 1:11

  return docDefinition;
};
