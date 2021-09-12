import { getDimensions, getName, getPath } from './helper';
import { getSetupJSON } from './helper/getSetupJSON';

export const getSetup = (svgData: string) => {
  const { useDefaultSize, svgComponent } = getSetupJSON();

  const name = getName();
  const path = getPath(svgData);
  const { width, height } = useDefaultSize
    ? getDimensions(svgData)
    : svgComponent;

  return {
    name,
    path,
    width,
    height,
  };
};
