import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart } from './charts';

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
  const donutChart = await getDonutChart({
    entries: options.topCountries.map((country) => ({
      label: country.country,
      value: country.customers,
    })),
    showTitle: true,
    titleText: 'Top 10 countries by customers',
    position: 'bottom',
  });

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
