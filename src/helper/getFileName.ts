import { argsConfig } from '../args.config';
import { getName } from './getName';
import { getSetupJSON } from './getSetupJSON';

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
