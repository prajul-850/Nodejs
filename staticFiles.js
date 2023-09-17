const http = require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);
}).listen('3000');

// const readStream=fs.createReadStream('./static/example.json');
// res.writeHead(200,{'Content-type':'application/json'});

// const readStream=fs.createReadStream('./static/img.png');
// res.writeHead(200,{'Content-type':'image/png'});
