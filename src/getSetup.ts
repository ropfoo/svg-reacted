import { readFileSync } from 'fs';

export const getSetup = () => {
  const data = readFileSync('setup.json', 'utf8');
  const config = JSON.parse(data);
  return {
    width: config.svgComponent.width,
    height: config.svgComponent.height,
  };
};
