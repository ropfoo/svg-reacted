# Install

```bash
npm i -g svg-reacted
```

# Usage

Create an **svgconfig.json** file in the root of your project.

```json
// svgconfig.json

{
    "useDefaultSize": true,
    "templateFile": "template/template.txt",
    "inputDir": "svg",
    "outputDir": "react",
    "svgComponent": {
        "nameExtension": "Icon",
        "type": "tsx",
        "fill": "black"
    }
}
```

Create a template file matching the defined path in your config file

Run the follwing command in the same location

```bash
npx svg-reacted your.svg
```

# Template File

### Supported Variables

|               |
| ------------- |
| **#{name}**   |
| **#{path}**   |
| **#{fill}**   |
| **#{width}**  |
| **#{height}** |

```txt
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const #{name}: React.FC = ({size = 30}) => {
    return (
        <Svg width={size} height={size} viewBox='0 0 #{width} #{height}' fill='#{fill}'>
            <Path
            d='#{path}'
            fill='#{fill}'
            stroke='#{fill}'
            />
        </Svg>
    );
};

export default #{name};

```

# Configuration

### General

|                    |         |                                |
| ------------------ | ------- | ------------------------------ |
| **useDefaultSize** | boolean |                                |
| **templateFile**   | string  | path to created temmplate file |
| **inputDir**       | string  |                                |
| **outputDir**      | string  |                                |

### svgComponent

|                   |         |                                |
| ----------------- | ------- | ------------------------------ |
| **usePascalCase** | boolean | turn first letter to uppercase |
| **nameExtension** | string  |                                |
| **type**          | string  | 'tsx', 'jsx'                   |
| **fill**          | string  |                                |
| **width**         | number  |                                |
| **height**        | number  |                                |
