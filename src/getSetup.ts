import { getPath } from './helper/getPath';
import { getDimensions } from './helper/getDimensions';
import { getName } from './helper/getName';
import { setupJSON } from './helper/getSetupJSON';

export const getSetup = (svgData: string) => {
    const { useDefaultSize, svgComponent } = setupJSON;

    const { width, height } = useDefaultSize
        ? getDimensions(svgData)
        : svgComponent;

    return {
        name: getName(),
        path: getPath(svgData),
        fill: svgComponent.fill,
        width,
        height,
    };
};
