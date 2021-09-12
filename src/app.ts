import { readFile, writeFile } from 'fs';
import { fileNameType, getFileName } from './helper';
import { defaultTSX } from './templates/defaultTSX';

readFile(`./input/${getFileName(fileNameType.INPUT)}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  writeFile(
    `./output/${getFileName(fileNameType.OUTPUT)}`,
    defaultTSX(data),
    (err) => {
      err && console.log(err);
    }
  );
});
