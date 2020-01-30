const express = require('express')
const router = express.Router()
const Exam = require('../models/Exam')

router.get('/yahoo' , (req , res)=>{

res.send("عمبلوس")

})
// to find all EXAM 

router.get('/Exam',(req,res)=>{   
Exam.find()
.then((Exams)=>{     
console.log(Exams)
res.send(Exams)

})


}) ;
//creat Exame 

router.post('/api/Exams',(req,res)=>{  
    console.log(req.body);
Exam.create(req.body)
.then((newExam)=>{      

    res.status(205).json({ Exam: "has been created" });

})
.catch((error)=>{       

    res.status(500).json({ error: error });


} );

});








module.exports = router 