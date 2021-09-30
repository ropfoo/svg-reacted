import { readFileSync } from 'fs';

export enum template {
    HOC = 'hoc',
    PD_NATIVE = 'pdNative',
}

interface setupJSON {
    useDefaultSize: boolean;
    templateType: template;
    svgComponent: {
        type: 'tsx' | 'jsx';
        fill: string;
        width: number;
        height: number;
    };
}

export const getSetupJSON = () => {
    const setupData = readFileSync('setup.json', 'utf8');
    return JSON.parse(setupData) as setupJSON;
};
