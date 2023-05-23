let fs = require('fs');

//Asynchronous operation
/*
fs.readFile('data.txt',function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read : "+data.toString());
})
console.log("Program End !");
*/

//Synchronous operation
/*
var data = fs.readFileSync('data.txt');
console.log("Synchronous read : "+data.toString());

console.log("Program End !");
*/

// Create a new file 

/*
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/

// Create an empty file using the open() method 
/*
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
*/

// Replace content if it exists , if not exists will be created !
/* 
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

*/ 

// Update : 
// * appendFile(): method appends the specified content at the end of the specified file .
// * writeFile(): method replaces the specified file and content .

// ---------// appendFile() // ---------//
/* 
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
*/

// ---------//  writeFile() // ---------//
/* 
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
*/

// Delete : The fs.unlink() method deletes the specified file .

/*
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/

// Rename : The fs.rename() method renames the specified file .

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
