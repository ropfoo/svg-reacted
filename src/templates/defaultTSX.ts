export const defaultTSX = (path: string | null) => `
import React from 'react';

const SVGIcon = () => {
    return (
        <svg>
            <path d="${path}">
        </svg>
    );
};

export default SVGIcon;

`;
