const express=require('express');

const app=express();

//listen for request
app.listen(3000);
app.get('/',(req,res)=>{
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  res.sendFile('./views/index.html',{root: __dirname});
});
app.get('/about',(req,res)=>{
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  res.sendFile('./views/about.html',{root: __dirname});
});


//redirect
app.get('/about-me',(req,res)=>{
  res.redirect('/about');
});

//404 not found
//use ini mirip dengan defaulnya switch
//HARUS TARUH BAWAH, KALO NGGAK MALAH KEEKSEKUSI DULUAN NTAR
app.use((req,res)=>{
 //res.sendFile('./views/404.html',{root: __dirname});
 //VERSI 2
 res.status(404).sendFile('./views/404.html',{root: __dirname});

});
