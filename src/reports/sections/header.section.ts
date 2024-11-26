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
  margin: [0, 20, 20, 20],
  width: 150,
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
  const separator: Content = {
    text: '',
    width: 100,
  };

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            style: {
              bold: true,
              fontSize: 20,
              alignment: 'center',
            },
          },
          subtitle
            ? {
                text: subtitle,
                style: {
                  fontSize: 15,
                  alignment: 'center',
                },
              }
            : null,
        ],
        margin: [0, 30, 0, 0],
      }
    : null;

  return {
    columns: [headerLogo, separator, headerTitle, headerDate],
  };
};
