import { argsConfig } from '../args.config';
import { fileNameType, getFileName } from './getFileName';

export const getName = () => {
  const args = process.argv.slice(2);
  const fileName = getFileName(fileNameType.INPUT);

  if (args[argsConfig.outputName]) {
    return args[argsConfig.outputName].split('.')[0];
  } else {
    return fileName.split('.')[0];
  }
};
