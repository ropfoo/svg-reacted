import { readFileSync } from 'fs';
import { getDimensionsFromFile } from './helper';

interface setupJSON {
  useDefaultSize: boolean;
  svgComponent: {
    width: number;
    height: number;
  };
}

export const getSetup = (svgData: string) => {
  const setupData = readFileSync('setup.json', 'utf8');
  const { useDefaultSize, svgComponent }: setupJSON = JSON.parse(setupData);

  const regexArrayPath = svgData.match(/(?<=path d=").*?(?=")/g);
  const path = regexArrayPath && regexArrayPath[0];

  const dimensions = useDefaultSize
    ? getDimensionsFromFile(svgData)
    : svgComponent;

  return {
    path,
    ...dimensions,
  };
};
