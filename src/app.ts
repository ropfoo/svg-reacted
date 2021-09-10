import { readFile, writeFile } from 'fs';
import { fileNameType, getFileName } from './helper';
import { defaultTSX } from './templates/defaultTSX';

readFile(`./input/${getFileName(fileNameType.INPUT)}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const regexArray = data.match(/(?<=path d=").*(?=" fill)/);
  const path = regexArray && regexArray[0];

  writeFile(
    `./output/${getFileName(fileNameType.OUTPUT)}`,
    defaultTSX(path),
    (err) => {
      err && console.log(err);
    }
  );
});
