import { readFile, writeFile } from 'fs';
import { filePathType, getFilePath } from './helper/getFilePath';
import { getTemplate } from './helper/getTemplate';

const runSvgReacted = () => {
    readFile(`${getFilePath(filePathType.INPUT)}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        writeFile(
            `${getFilePath(filePathType.OUTPUT)}`,
            getTemplate(data),
            err => {
                err && console.error(err);
            }
        );
    });
};

export default runSvgReacted;
