// Duplex 

const fs = require('fs');

let readStreams = fs.createReadStream('./newFile.txt' ,'utf-8');
let writeStreams = fs.createWriteStream('./newFile2.txt');

// read and write with pipe()
readStreams.pipe(writeStreams);