import { argsConfig } from '../args.config';
import { filePathType, getFilePath } from './getFilePath';
import { setupJSON } from './getSetupJSON';

export const getName = () => {
    const { svgComponent } = setupJSON;
    const args = process.argv.slice(2);
    const path = getFilePath(filePathType.INPUT);
    const pathArr = path.split('/');

    let fileName = pathArr[pathArr.length - 1];
    if (svgComponent.usePascalCase) {
        const pascalCaseFileName =
            fileName.charAt(0).toUpperCase() + fileName.slice(1);
        fileName = pascalCaseFileName;
    }

    if (args[argsConfig.outputName]) {
        return `${args[argsConfig.outputName].split('.')[0]}${
            svgComponent.nameExtension ?? ''
        }`;
    } else {
        return `${fileName.split('.')[0]}${svgComponent.nameExtension ?? ''}`;
    }
};
