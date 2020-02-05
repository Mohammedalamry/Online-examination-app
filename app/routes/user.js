const express = require('express');
const router = express.Router();
//requir Shemam user module
const User = require('../models/user');

router.get('/api/users' , (req , res)=>{

  User.find()
  .then((users)=>{     
  res.send(users)
  
  });
  


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

//route  updat user 

// //update  specific ExqamQoustion
// router.put('/api/users/:id',(req,res)=>{
//   res.send( {Type:'Put'})


// });


//rout detel user
router.delete('/api/users/:id',(req,res)=>{
 
  User.findByIdAndRemove(req.params.id, (err, deletedExam)=>{
      if (err)  { console.log(err) }
     res.json(deletedExam);
   });
  })


// route for Admin to creat an Exam
router.post("/api/user/adminmail/createExame",(req,res)=>{
  res.send( {Type:'creatnewExam'})



});


// route for Admin to creat new Qutions in Specific Exam
router.post("/api/user/adminmail/Examnameorid",(req,res)=>{
  res.send( {Type:'creatnewExam'})



});


// //route  update user 
      
router.put('/api/users/:id',(req,res)=>{
    console.log("work")
   User.findByIdAndUpdate(req.params.id,{first_name: req.body.first_name,last_name:req.body.last_name} , {new:true}, (err, updatedModel)=>{
       
       res.send(updatedModel);
   }); 
  
  });
  
  








 






module.exports = router 