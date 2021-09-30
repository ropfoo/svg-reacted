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
    "templateType": "hoc",
    "inputDir":"svg",
    "outputDir":"react",
    "svgComponent": {
        "nameExtension": "Icon",
        "type": "tsx",
        "fill": "black",
    }
}
```

Run the follwing command in the same location

```bash
npx svg-reacted your.svg
```

# Configuration

### General

|   |   |   |
|---|---|---|
|__useDefaultSize__| boolean |  |
| __templateType__ | string | 'hoc', 'pdNative' |
| __inputDir__ | string |  |
| __outputDir__ | string |  |

### svgComponent

|   |   |   |
|---|---|---|
|__usePascalCase__| boolean | turn first letter to uppercase |
|__nameExtension__| string |  |
| __type__ | string | 'tsx', 'jsx' |
| __fill__ | string |  |
| __width__ | number |  |
| __height__ | number |  |