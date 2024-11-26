import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

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
};

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: style,
    pageMargins: [40, 60, 40, 60], // [left, top, right, bottom]
    header: {
      columns: [
        logo,
        {
          text: `${new Date().toLocaleDateString()}`,
          alignment: 'right',
          margin: [0, 20, 20, 20],
        },
      ],
    },
    content: [
      {
        text: 'CONSTANCIA DE EMPLEO',
        style: 'header',
      }, // Tambien te hacepta los enter para dejar espacio
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa],
                por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra
                empresa desde el [Fecha de Inicio del Empleado].
            

                Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del
                Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus
                labores. \n\n
                La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas
                semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y
                procedimientos establecidos por la empresa.\n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.\n\n`,
        style: 'body',
      },
      {
        text: `Atentamente,
                [Nombre del Empleador]
                [Cargo del Empleador]
                [Nombre de la Empresa]
                [Fecha de Emisión]`,
        style: 'signature',
      },
    ],
  };
  return docDefinition;
};
