const fs=require('fs');
const zlib=require('zlib');
// const gzip=zlib.createGzip();
// const readStream=fs.createReadStream('./example.txt','utf-8');
// const writeStream=fs.createWriteStream('example2.txt.gz','utf-8');
// readStream.pipe(gzip).pipe(writeStream);

const gunzip=zlib.createGunzip();
const readStream=fs.createReadStream('./example2.txt.gz','utf-8');
const writeStream=fs.createWriteStream('uncompressed.txt','utf-8');
readStream.pipe(gunzip).pipe(writeStream);
