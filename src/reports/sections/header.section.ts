import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: DateFormatter.getDDMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 30],
  width: 100,
  fontSize: 10,
};

interface HeaderOptions {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subtitle, showLogo = true, showDate = true } = options;

  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate ? currentDate : null;
  const subtitleData: Content = {
    text: subtitle,
    alignment: 'center',
    margin: [0, 2, 0, 0],
    style: {
      fontSize: 15,
    },
  };

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            alignment: 'center',
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          subtitle ? subtitleData : null,
        ],
        margin: [0, 30, 0, 0],
      }
    : null;

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
