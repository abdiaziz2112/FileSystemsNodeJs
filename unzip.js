const fs=require('fs');
// const zlib=require('zlib');
const unzlib=require('zlib');
 

// fs.createReadStream('./test3.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./test3.txt.gz'))
// console.log('ziped');


fs.createReadStream('./test3.txt').pipe(unzlib.createGunzip()).pipe(fs.createWriteStream('./test3.txt'))
console.log('file uncomporized')
