const fs =require('fs');

fs.watch('dii.txt',(eventType, filename)=>{
        console.log('\n the file ',filename, 'was modified!');
        console.log('the type of change was:',eventType);
    
    })
    // Renaming the file to a new name
    setTimeout( () => {
        fs.renameSync('bashka.txt', 'test.txt'),
      1000
    });
    // Renaming the file back to its old name
    setTimeout(() => {
        fs.renameSync('test.txt', 'dii.txt'),
        2000
    });
    // Changing the contents of the file 
    setTimeout(() => {
        fs.writeFileSync('bashka.txt', 
        "The file is modified"), 3000
    });
    