const fs=require('fs');
fs.appendFile('std.txt',' \n I am new student',(err)=>{
    if(err) throw err;
    console.log('Updated!');
})