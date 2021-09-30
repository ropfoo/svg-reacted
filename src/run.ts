import { readFile, writeFile } from 'fs';
import { fileNameType, getFileName } from './helper/getFileName';
import { getTemplate } from './helper/getTemplate';

const runSvgReacted = () => {
    readFile(`${getFileName(fileNameType.INPUT)}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        writeFile(
            `${getFileName(fileNameType.OUTPUT)}`,
            getTemplate(data),
            err => {
                err && console.log(err);
            }
        );
    });
};

export default runSvgReacted;
