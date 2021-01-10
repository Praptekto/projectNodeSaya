const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url, req.method);

  //ada 3 step : 1. ser header 2. set yang mau dikirm 3. ending
  //set header content type
  res.setHeader('content-type','text/html');

  res.write("<p>makan</p>");
  res.write('<p>nasi</p>');
  res.end();

});

server.listen(3000,'localhost',()=>{
  console.log('Listening for request on port 3000');
});
