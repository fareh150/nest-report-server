import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from '../helpers/chart-utils';
import { title } from 'process';

const generateTopCountryDonut = async (
  topCountries: TopCountry[],
): Promise<string> => {
  const data = {
    labels: topCountries.map((country) => country.country),
    datasets: [
      {
        label: 'Dataset 1',
        data: topCountries.map((country) => country.customers),
        // backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position: 'left',
      },
      title: {
        text: 'someTitle',
        display: true,
      },
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: 16,
          },
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};

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
  const donutChart = await generateTopCountryDonut(options.topCountries);

  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        image: donutChart,
        width: 500,
      },
    ],
  };

  return docDefinition;
};
