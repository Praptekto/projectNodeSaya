//STREAMS AND BUFFER
const fis =require('fs');

const readStream=fis.createReadStream('./docs/blog3.txt');
const writeStream=fis.createWriteStream('./docs/blog4.txt');

/*readStream.on('data',(chunk)=>{
  console.log("=======New BUFFER=======");
  console.log(chunk.toString());
  writeStream.write('\nNew chunk\n');
  writeStream.write(chunk);
});*/

//CARA CEPAT CODE DIATAS
readStream=pipe(writeStream);
