const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')
// get  all  blog 
router.get('/api/blog' , (req , res)=>{

res.send("blog")

});
// get a blog   

router.get('/api/blog/:id' , (req , res)=>{

    res.send("oneblog")
    
    });

//creat blog
router.post('/api/blog' , (req,res) =>{

    Blog.create(req.body)
    .then(blog => {
        res.json( blog )
    })
    .catch(err => res.send(err))

});

//update blog
router.put('/api/blog/:id', (req,res)=>{
    Blog.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedModel)=>{
  res.json(updatedModel);

    });

    // res.json({blog:'blog was updated'})

});
//delet blog
router.delete('/api/blog/:id', (req,res)=>{

    Blog.findByIdAndRemove(req.params.id,(err,deletedModel)=>{
    if(err){   console.log(err)}
   res.json(deletedModel)

    });

    // res.json({blog:'blog was delted'})
 
});


module.exports = router 