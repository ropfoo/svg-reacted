import { argsConfig } from '../args.config';
import { getName } from './getName';
import { setupJSON } from './getSetupJSON';

export enum filePathType {
    OUTPUT = 'output',
    INPUT = 'input',
    TEMPLATE = 'template',
}

export const getFilePath = (filePath: filePathType): string => {
    const args = process.argv.slice(2);
    const { svgComponent, outputDir, inputDir, templateFile } = setupJSON;

    switch (filePath) {
        case filePathType.OUTPUT:
            return (
                args[argsConfig.outputName] ??
                `${outputDir}/${getName()}.${svgComponent.type}`
            );

        case filePathType.INPUT:
            return inputDir
                ? `${inputDir}/${args[argsConfig.inputFileName]}`
                : args[argsConfig.inputFileName];

        case filePathType.TEMPLATE:
            return templateFile;

        default:
            return 'noname.tsx';
    }
};
