const express = require('express');
const router = express.Router();
//requir Shemam user module
const User = require('../models/user');

router.get('/user' , (req , res)=>{

res.send("User1")


});

// creat users 

router.post('/api/users', (req, res)=> {

    console.log(req.body);
  
   User.create(req.body)
  
      // On a successful `create` action, respond with the 201
  
      // HTTP status and the content of the new article.
  
      .then((newUser)=> {
  
        res.status(201).json({ user: "has been created" });
  
      })
  
      // Catch any errors that might occur
  
      .catch( (error) =>{
  
        res.status(500).json({ error: error });
  
      });
  
  });


 






module.exports = router 