const express=require('express');
const app=express();

//register view engine
app.set('view engine','ejs');// membuat view enginenay menjadi ejs
//app.set('views','foldertempat ejs');, deafaulnya ke folder views

//listen for request
app.listen(3000);

app.get('/',(req,res)=>{
  const blogs=[
    {judul: 'Makan nasi',isi:'ini adalah isi didalam blognya'},
    {judul: 'Makan nasi',isi:'ini adalah isi didalam blognya'},
    {judul: 'Makan nasi',isi:'ini adalah isi didalam blognya'},
    {judul: 'Makan nasi',isi:'ini adalah isi didalam blognya'}
  ];
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  //res.sendFile('index');
  res.render('index',{title:'home',blogs}); //res nya render, bukan sendfile
});
app.get('/about',(req,res)=>{
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  res.render('about',{tentang:"tentang"});
});
app.get('/blogs/create',(req,res)=>{//directory ini diterima dari tag href
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  //res.sendFile('index');
  res.render('create',{buat:"buat blog"}); //res nya render, bukan sendfile
});
//================================================================
//404 not found
//use ini mirip dengan defaulnya switch
//HARUS TARUH BAWAH, KALO NGGAK MALAH KEEKSEKUSI DULUAN NTAR
app.use((req,res)=>{
 //res.sendFile('./views/404.html',{root: __dirname});
 //VERSI 2
 res.status(404).render('404',{notfound:"tidak ditemukan"});
});
