import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getBarsChart, getDonutChart, getLineChart } from './charts';
import { headerSection } from './sections/header.section';
import { footerSection } from './sections/footer.section';

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
  const [donutChart, lineChart, barChart1] = await Promise.all([
    getDonutChart({
      entries: options.topCountries.map((country) => ({
        label: country.country,
        value: country.customers,
      })),
      showTitle: true,
      position: 'left',
    }),
    getLineChart(),
    getBarsChart(),
  ]);

  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 100, 40, 60],
    header: headerSection({
      title: options.title ?? 'Estadísticas',
      subtitle: options.subtitle ?? 'Reporte de estadísticas',
    }),
    footer: footerSection,
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
      {
        margin: [0, 20, 0, 0],
        columnGap: 10,
        columns: [
          {
            image: barChart1,
            width: 250,
          },
        ],
      },
    ],
  };
  // min 1:11

  return docDefinition;
};
