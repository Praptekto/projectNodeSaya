const http=require('http');
const fis=require('fs');


const server=http.createServer((req,res)=>{
  console.log(req.url, req.method);

  //set header content type
  res.setHeader('content-type','text/html');

  let path='./views/';
  switch (req.url){
    case '/':
      path +='index.html';
      break;
    case '/about':
      path +='about.html';
      break;
    default:
      path +='404.html';
      break;
  }

  //
  fis.readFile(path,(err,data)=>{
    if(err){
      console.log(err);
      res.end();
    }else{
      res.write(data);
      res.end();
      //dua code diatas pas ini dapat juga ditulis dengan res.end(data);
    }

  });
});

server.listen(3000,'localhost',()=>{
  console.log('Listening for request on port 3000');
});
