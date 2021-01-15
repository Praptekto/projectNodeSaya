const express=require('express');
const app=express();
const morgan= require('morgan');
const mongoose=require('mongoose');

const BlogRoutes=require('./routes/blogroutes');


//connect to database
const dbURI='mongodb+srv://Praptekto122:prapdbpertama@nodepertama.rwyus.mongodb.net/Nodepertama?retryWrites=true&w=majority'; //didapat dari mongodb, tiap database punya urlnya masing2
mongoose.connect(dbURI, {useNewUrlParser: true,useUnifiedTopology:true})


//register view engine
app.set('view engine','ejs');// membuat view enginenay menjadi ejs
//app.set('views','foldertempat ejs');, deafaulnya ke folder views

//listen for request
app.listen(process.env.PORT||3000);

//MIDDLEWARE
app.use(morgan('tiny'));//ini adalah middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public')); //membuat file public menjadi statis sehinga kita bisa mengakses css dll

//menambah blog
app.get('/add-blog',(req,res)=>{
  const blog=new Blog({
    title:'new blog',
    snippet:'about my blog',
    body:'more about my blog'
  });

  blog.save()
    .then(result=>{
      res.send(result);
    })
    .catch(err=>{
      console.log(err);
    })
});

app.get('/all-blogs',(req,res)=>{
  Blog.find()
    .then(result=>{
      res.send(result);
    })
    .catch(err=>{
      console.log(err);
    })
}
);//end of get


//melihat sigle blog
app.get('/sigle-blog',(req,res)=>{
  Blog.findById('5ffe3ddd64cf93368e27868f')//isi dengan id
    .then(result=>{
      res.send(result);
    })
    .catch(err=>{
      console.log(err);
    })
})

//ROUTES

app.get('/',(req,res)=>{

  res.redirect('/blog'); //res nya render, bukan sendfile
});

//blog routes
//app.use(BlogRoutes); bisa pakai ini, atau yang bawah, tapi yang bawah lebih scalable
app.use('/blog',BlogRoutes);

app.get('/about',(req,res)=>{
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  res.render('about',{title:"tentang"});
});

//================================================================
//404 not found
//use ini mirip dengan defaulnya switch
//HARUS TARUH BAWAH, KALO NGGAK MALAH KEEKSEKUSI DULUAN NTAR

app.use((req,res)=>{
 //res.sendFile('./views/404.html',{root: __dirname});
 //VERSI 2
 res.status(404).render('404',{title:"tidak ditemukan"});
});
