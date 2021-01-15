const express=require('express');
const Blog=require('../Models/blog'); //Blog sudah disambungkan ke sebuag skema, yang nantinya skema ini akan dicari pada database "node pertama di link panjang berikut dibawah"

const router=express.Router();

//NOTE PENTING . Disini /blog dalam patah dihapus karena kita sudah pakai "/blog" didalam app.use('/blog',BlogRoutes) di app
router.get('/create',(req,res)=>{//directory ini diterima dari tag href
  //res.send('<p>Mantap</p>')
  //cara mengirim file
  //res.sendFile('index');
  res.render('create',{title:"buat blog"}); //res nya render, bukan sendfile
});
router.get('/',(req,res)=>{
  Blog.find().sort({createdAt: -1})// bisa sort karena sudah kita buat time stamp(???)
  .then(
      (result)=>{
        res.render('index',{blogs:result, title:'All p' });
      }
    )
    .catch(err=>{
      console.log(err);
    })
})


router.post('/',(req,res)=>{
  //tambahkan middleware dulu, saya taruh atas
  //masukan data ke variabel
  const blog = new Blog(req.body);
  //masukan
  blog.save()
    .then((result)=>{
      res.redirect('/blog');
    })
    .catch((err)=>{
      console.log(err);
    })
}

);

router.get('/:id',(req,res)=>{
  var id= req.params.id;
  Blog.findById(id)
    .then((result)=>{
      res.render('details',{blog:result, title:"Blogs Detail"});
    })
    .catch((err)=>{
      console.log(err);
    })
})


router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blog' });
    })
    .catch(err => {
      console.log(err);
    });
});


module.exports=router;
