const fs = require('fs');
const Duplex = require('stream').Duplex;
Duplex.Readable = fs.createReadStream('war.txt');
Duplex.Writable = fs.createWriteStream('camaj.txt');
Duplex.Readable.setEncoding('utf8');
Duplex.Readable.on('data', chunk=> {
  Duplex.Writable.write(chunk);
  console.log("Duplex Successfully");
});
