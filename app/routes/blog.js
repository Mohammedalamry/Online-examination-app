const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/blog' , (req , res)=>{

res.send("blog")

})
router.post('/' , (req,res) =>{

    Blog.create(req.body)
    .then(blog => {
        res.json({msg : "the blog has been added "} )
    })
    .catch(err => res.send(err))

})




module.exports = router 