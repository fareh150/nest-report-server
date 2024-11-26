import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { DateFormatter } from 'src/helpers';

interface ReportValues {
  employerName: string;
  employerPosition: string;
  employeeName: string;
  employeePosition: string;
  employeeStartDate: Date;
  employeeHours: number;
  employeeWorkSchedule: string;
  employeeCompany: string;
}

const style: StyleDictionary = {
  header: {
    fontSize: 18,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    fontSize: 14,
    bold: true,
    alignment: 'left',
  },
  footer: {
    fontSize: 10,
    italics: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
};

export const getEmploymentLetterByIdReport = (
  values: ReportValues,
): TDocumentDefinitions => {
  const {
    employerName,
    employerPosition,
    employeeName,
    employeePosition,
    employeeStartDate,
    employeeHours,
    employeeWorkSchedule,
    employeeCompany,
  } = values;
  const docDefinition: TDocumentDefinitions = {
    styles: style,
    pageMargins: [40, 60, 40, 60], // [left, top, right, bottom]
    header: headerSection({
      showLogo: true,
      showDate: true,
      // title: 'CONSTANCIA DE EMPLEO',
    }),
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      }, // Tambien te hacepta los enter para dejar espacio
      {
        text: `Yo, ${employerName}, en mi calidad de ${employerPosition} de ${employeeCompany},
                por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra
                empresa desde el ${DateFormatter.getDDMMYYYY(employeeStartDate)}.
            

                Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus
                labores. \n\n
                La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas
                semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y
                procedimientos establecidos por la empresa.\n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.\n\n`,
        style: 'body',
      },
      {
        text: `Atentamente,
        ${employerName}
        ${employerPosition}
        ${employeeCompany}
                ${DateFormatter.getDDMMYYYY(new Date())}`,
        style: 'signature',
      },
    ],
    footer: {
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
      style: 'footer',
    },
  };
  return docDefinition;
};
