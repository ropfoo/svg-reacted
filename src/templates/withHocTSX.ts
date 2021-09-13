import { getSetup } from '../getSetup';

export const createWithHocTSX = (svgData: string) => {
  const { name, path, fill, width, height } = getSetup(svgData);
  return `
import { ComponentType } from 'react';
import Icon, { withIcon } from '../utils/Icon';

const ${name}: ComponentType<any> = withIcon(Icon, {
    fill: '${fill}',
    width: ${width},
    height: ${height},
    path: '${path}',
    
});

export default ${name};
`;
};
