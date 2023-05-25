// Writable streams

const fs = require('fs');

let readStreams = fs.createReadStream('./file.txt' ,'utf-8');
let writeStreams = fs.createWriteStream('./newFile.txt');

readStreams.on('data',function (chunk) {
    console.log('new chunk received !');
    writeStreams.write(chunk);
})