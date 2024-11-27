import { Content } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
): Content => {
  const pagination: Content = {
    text: `Pagina ${currentPage.toString()} de ${pageCount}`,
    alignment: 'right',
    margin: [0, 20, 20, 20],
    bold: true,
  };
  return {
    columns: [pagination],
  };
};
