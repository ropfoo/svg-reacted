import { readFileSync } from 'fs';

interface setupJSON {
    useDefaultSize: boolean;
    templateFile: string;
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
