
//console.log(global);
/*
global.setTimeout(()=>{
  console.log("Mantap jiwa");
  clearInterval(int);

}, 3000 //milisecon

);

const int=setInterval(()=>{
  console.log("Interval");
},1000

);
const papa=require('os');
console.log(papa);*/

//=============FILE SYSTEM=====================
//READING FILES
const fis = require('fs');
///**/
/*
fis.readFile('./docs/blog.txt',(err,data)=>{
  if(err){
      console.log(err);
  }else{
    console.log(data.toString());
  }
});*/


//WRITING FILES
/*
fis.writeFile('./docs/blog.txt','Halo yang baru',()=>{
  console.log("Files was written");
});

fis.writeFile('./docs/blogdua.txt',"akan ada di file baru",()=>{console.log("SUKSES")});
*/

//DIRECTORIES
/*
if (!fis.existsSync('./Assetku')){
  fis.mkdir('./Assetku',(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("directories created");
    }
  });
}else {
  fis.rmdir('./Assetku',(err)=>{
    if (err){
      console.log(err);
    }else{
        console.log("Folder dihapus");
    }

  })
}
}


*/
//DELETING FILES
if(fis.existsSync('./docs/blog.txt')){
  fis.unlink('./docs/blog.txt',(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("sukses menghapus file");
    }
  });

}
