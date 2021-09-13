import { readFile, writeFile } from 'fs';
import { fileNameType, getFileName } from './helper/getFileName';
import { getTemplate } from './helper/getTemplate';

readFile(`./input/${getFileName(fileNameType.INPUT)}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  writeFile(
    `./output/${getFileName(fileNameType.OUTPUT)}`,
    getTemplate(data),
    (err) => {
      err && console.log(err);
    }
  );
});
