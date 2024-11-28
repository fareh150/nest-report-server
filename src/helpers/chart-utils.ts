import axios from 'axios';

interface ChartOptions {
  height?: number;
  width?: number;
}

export const chartJsToImage = async (
  chartConfig: unknown,
  options: ChartOptions = {},
) => {
  const params = new URLSearchParams();

  if (options.height) {
    params.append('height', String(options.height));
  }

  if (options.width) {
    params.append('width', String(options.width));
  }

  const encoderUri = encodeURIComponent(JSON.stringify(chartConfig));
  const chartUrl = `https://quickchart.io/chart?c=${encoderUri}&${params.toString()}`;

  const response = await axios.get(chartUrl, { responseType: 'arraybuffer' });

  return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
};
