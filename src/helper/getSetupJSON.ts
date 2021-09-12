import { readFileSync } from 'fs';

interface setupJSON {
  useDefaultSize: boolean;
  svgComponent: {
    type: 'tsx' | 'jsx';
    width: number;
    height: number;
  };
}

export const getSetupJSON = () => {
  const setupData = readFileSync('setup.json', 'utf8');
  return JSON.parse(setupData) as setupJSON;
};
