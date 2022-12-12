const vv=require('fs');
const Tranform=require('stream').Transform;
const read=vv.createReadStream('./std.txt');
const write=vv.createWriteStream('./test3.txt');
const TranformToUpperCase=()=>{
return new Tranform({
    transform(chunk,enc,callback){
        const uppercase=chunk.toString().toUpperCase();
        callback(null,uppercase);
    }
})
}

const upper=TranformToUpperCase();
read.pipe(upper).pipe(write);
console.log("Transform Compeleted");