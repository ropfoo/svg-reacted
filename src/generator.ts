import { getSetup } from './getSetup';

type generatorProps = {
    templateString: string;
    svgData: string;
};

export const generator = ({ templateString, svgData }: generatorProps) => {
    const { name, path, fill, width, height } = getSetup(svgData);

    let result: string = templateString;

    const replacePairs = [
        {
            before: /#{name}/g,
            after: name,
        },
        {
            before: /#{path}/g,
            after: path,
        },
        {
            before: /#{fill}/g,
            after: fill,
        },
        {
            before: /#{width}/g,
            after: width,
        },
        {
            before: /#{height}/g,
            after: height,
        },
    ];

    replacePairs.forEach(({ before, after }) => {
        if (after) {
            result = result.replace(before, after?.toString());
        }
    });

    return result;
};
