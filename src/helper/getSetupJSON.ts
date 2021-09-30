import { readFileSync } from 'fs';

export enum template {
    HOC = 'hoc',
    PD_NATIVE = 'pdNative',
}

interface setupJSON {
    useDefaultSize: boolean;
    templateType: template;
    inputDir: string;
    outputDir: string;
    svgComponent: {
        usePascalCase: boolean;
        nameExtension: string;
        type: 'tsx' | 'jsx';
        fill: string;
        width: number;
        height: number;
    };
}

const getSetupJSON = () => {
    const setupData = readFileSync('svgconfig.json', 'utf8');
    return JSON.parse(setupData) as setupJSON;
};

export const setupJSON = getSetupJSON();
