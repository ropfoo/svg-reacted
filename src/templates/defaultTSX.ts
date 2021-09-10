import { getSetup } from '../getSetup';

export const defaultTSX = (path: string | null) => {
  const { width, height } = getSetup();
  return `
import React from 'react';

const SVGIcon: React.FC = () => {
    return (
        <svg width="${width}" height="${height}">
            <path d="${path}">
        </svg>
    );
};

export default SVGIcon;

`;
};
