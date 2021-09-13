import { getSetup } from '../getSetup';

export const defaultTSX = (svgData: string) => {
  const { name, path, fill, width, height } = getSetup(svgData);
  return `
import React from 'react';

const ${name}: React.FC = () => {
    return (
        <svg width="${width}" height="${height}" fill="${fill}">
            <path d="${path}">
        </svg>
    );
};

export default ${name};
`;
};
