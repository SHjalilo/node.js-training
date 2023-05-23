let http = require('http');
let url = require('url');
let fs = require('fs');
const { log } = require('console');
/*
let adr = 'https://www.w3schools.com/js/tryit.asp?filename=tryjs_statement';

let data = url.parse(adr,true);

console.log(data);
console.log(data.hostname);
console.log(data.query);
console.log(data.query.filename);
*/

// Example : create server !

http.createServer(function (req,res) {
    var data = url.parse(req.url,true);
    console.log(data);
    var filename = '.'+ data.pathname;
    console.log(filename);
    fs.readFile(filename,function (err, value) {
        if (err) {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found !");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(value);
        return res.end();
    });
    
}).listen(10000);