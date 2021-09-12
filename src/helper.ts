import { argsConfig } from './args.config';
import { getSetupJSON } from './helper/getSetupJSON';

export enum fileNameType {
  OUTPUT = 'output',
  INPUT = 'input',
}

export const getFileName = (fileName: fileNameType): string => {
  const args = process.argv.slice(2);
  const { svgComponent } = getSetupJSON();

  switch (fileName) {
    case fileNameType.OUTPUT:
      return args[argsConfig.outputName]
        ? args[argsConfig.outputName]
        : `${getName()}.${svgComponent.type}`;

    case fileNameType.INPUT:
      return args[argsConfig.inputFileName];

    default:
      return 'noname.tsx';
  }
};

export const getDimensions = (data: string) => {
  const regexArrayDimensions = data.match(
    /(?<=width=").*?(?=")|(?<=height=").*?(?=")/g
  );
  const width = regexArrayDimensions && regexArrayDimensions[0];
  const height = regexArrayDimensions && regexArrayDimensions[1];

  return {
    width,
    height,
  };
};

export const getPath = (data: string) => {
  const regexArrayPath = data.match(/(?<=path d=").*?(?=")/g);
  return regexArrayPath && regexArrayPath[0];
};

export const getName = () => {
  const args = process.argv.slice(2);
  const fileName = getFileName(fileNameType.INPUT);

  if (args[argsConfig.outputName]) {
    return args[argsConfig.outputName].split('.')[0];
  } else {
    return fileName.split('.')[0];
  }
};
