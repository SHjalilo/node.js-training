// Readable streams :

const fs = require('fs');

// const file = fs.createWriteStream('./big.file');
// for (let index = 0; index <= 100 ; index++) {
//     file.write('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.')
// }
// file.end();

// low memory usag 
let readStream = fs.createReadStream('./big.file', 'utf-8');
readStream.on('data', (part)=>{
    console.log(part);
})

// high usage of memory 
function readData() {
    fs.readFile('./big.file', (err,data)=>{
        console.log(data.toString());
    })
}

//readData();