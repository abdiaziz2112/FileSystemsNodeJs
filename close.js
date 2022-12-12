const fs=require('fs');
file_description=fs.openSync('bashka.txt');
console.log('the file description is',file_description);
fs.close(file_description,(err)=>{
    if(err) throw err;
    console.log('file closed');
})