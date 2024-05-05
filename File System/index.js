const { log, error } = require('console');
const fs = require('fs');
const textIn = fs.readFileSync('./test.txt', 'utf8');
log(textIn);

const newTextIn = `This is new Text File : ${textIn}`;
fs.writeFileSync('./text.txt', newTextIn);

// Non-Blocking

fs.readFile('./test.txt', 'utf-8', (err1, data1) => {
  fs.readFile('./text.txt', 'utf-8', (err2, data2) => {
    fs.writeFile('./nonBlocking.txt', `${data1} - ${data2}`, err => {
      log('process complete');
    });
  });
});
