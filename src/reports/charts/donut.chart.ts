import * as Utils from 'src/helpers/chart-utils';

interface DonutEntry {
  label: string;
  value: number;
}

interface DonutOptions {
  position?: 'left' | 'right' | 'top' | 'bottom';
  entries: DonutEntry[];
  showTitle?: boolean;
  titleText?: string;
}

export const getDonutChart = async (options: DonutOptions): Promise<string> => {
  const {
    position = 'top',
    showTitle = false,
    titleText = 'Send titleText',
  } = options;
  const data = {
    labels: options.entries.map((e) => e.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: options.entries.map((e) => e.value),
        // backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position: position,
      },
      title: {
        text: titleText,
        display: showTitle,
      },
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: 14,
          },
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
