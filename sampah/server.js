const http=require('http');
const fis=require('fs');

//awal 1
const server=http.createServer((req,res)=>{
  console.log(req.url, req.method);

  //set header content type
  res.setHeader('content-type','text/html');

  //SJ 1
  let path='./views/';
  switch (req.url){
    case '/':
      path +='index.html';
      res.statusCode=200;
      break;
    case '/about':
      path +='about.html';
      res.statusCode=200;
      break;
    //case ini akan melakukan redirect
    case '/about-me':
      res.statusCode=301;
      res.setHeader('Location','/about');
      res.end();
      break;
    default:
      path +='404.html';
      res.statusCode=404;
      break;
  }
  //SJ 1 END

  //Dibaca dari server lalu ditulis ke browser
  fis.readFile(path,(err,data)=>{//membaca dari server
    if(err){
      console.log(err);
      res.end();
    }else{
      //menulis ke browser # nodejs, bukan express
      res.write(data);
      res.end();
      //dua code diatas pas ini dapat juga ditulis dengan res.end(data);
    }

  });
});
//akhir 1

server.listen(3000,'localhost',()=>{
  console.log('Listening for request on port 3000');
});
