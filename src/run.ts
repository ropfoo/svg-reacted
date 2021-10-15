import { readFile, writeFile } from 'fs';
import { generator } from './generator';
import { filePathType, getFilePath } from './helper/getFilePath';

const runSvgReacted = () => {
    readFile(`${getFilePath(filePathType.INPUT)}`, 'utf8', (err, svgData) => {
        if (err) {
            console.error(err);
            return;
        }

        readFile(
            getFilePath(filePathType.TEMPLATE),
            'utf8',
            (err, templateData) => {
                if (err) {
                    console.error(err);
                    return;
                }

                writeFile(
                    `${getFilePath(filePathType.OUTPUT)}`,
                    generator({
                        templateString: templateData,
                        svgData: svgData,
                    }),
                    err => {
                        err && console.error(err);
                    }
                );
            }
        );
    });
};

export default runSvgReacted;
