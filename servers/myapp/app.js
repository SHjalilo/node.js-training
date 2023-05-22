// import http module 

let http = require('http');
const port = 10000;
http.createServer(function (req,res) {
    // req & res 
    //
    //

    res.writeHead(200  , {'Content-Type':'text/plain'});

    res.write('hello MF');

    res.end();

}).listen(port , function () {
    console.log(`Node.js web server at localhost:${port}`);
})