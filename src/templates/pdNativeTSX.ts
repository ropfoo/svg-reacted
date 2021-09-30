import { getSetup } from '../getSetup';

export const nativeTSX = (svgData: string) => {
    const { name, path, fill, width, height } = getSetup(svgData);
    let size = 30;
    return `import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Icon } from './Icon';

const ${name}: React.FC<Icon> = ({size = ${size}}) => {
    return (
        <Svg width={size} height={size} viewBox='0 0 ${width} ${height}' fill='${fill}'>
            <Path
            d='${path}'
            fill='${fill}'
            stroke='${fill}'
            />
        </Svg>
    );
};

export default ${name};
`;
};
