const fs = require('fs');
//close
const fd = fs.openSync('./bashka.txt');
console.log('file description: '+fd);
fs.close(fd,(err)=>{
    if(err) throw err
    console.log();
})