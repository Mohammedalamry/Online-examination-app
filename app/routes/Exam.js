const express = require('express')
const router = express.Router()
const Exam = require('../models/Exam')
 

router.get('/api/Exams',(req,res)=>{   
 
Exam.find()
.then((Exams)=>{     
console.log(Exams)
res.send(Exams)

});


}) ;
/// get specif exam qoutions
router.get('/api/Exams/:id',(req,res)=>{   
    Exam.findById(req.params.id, (err, foundExam)=>{
        if (err)  { res.send(err) }
        res.json(foundExam);
      });
    
    
    }) ;






//creat Exame 

router.post('/api/Exams',(req,res)=>{  

//     if(!req.body){   
//         return    res.status(404).json("rout body is missing");
    
//         }
//      ExamM = new Exam ( req.body)
// ExamM.save().then((ExamM,err)=>{   

//    res.json(ExamM);
// });
    
Exam.create(req.body)
.then((newExam)=>{      
    
    res.status(205).json({ Exam: newExam});

})
.catch((error)=>{       

    res.status(500).json({ error: error });


} );

});

//update  specific ExqamQoustion
router.put('/api/Exams/:id',(req,res)=>{
    console.log(req.body )
 Exam.findByIdAndUpdate(req.params.id,{$push:{theQuestion:req.body}},{useFindAndModify :false} )
 .then(exam => res.json({exam , msg : "yeeeee"}))
 .catch(err=> res.send(err))

});

//udate new thing 
//update  specific ExqamQoustion
// router.put('/api/Exams1/:id',(req,res)=>{
//     console.log('bo'+req.body )
//  Exam.findByIdAndUpdate(req.params.id,{theQuestion: req.body.theQuestion} , {new:true}, (err, updatedModel)=>{
     
//     res.send(updatedModel);
// }); 

// });







//delet ExqamQoustion
router.delete('/api/Exams/:id',(req,res)=>{
 
    Exam.findByIdAndRemove(req.params.id, (err, deletedExam)=>{
        if (err)  { console.log(err) }
       res.json(deletedExam);
     });



// insert  New Quition with options and correct ansear
router.post('/api/Exams/Examid/addnewQutions',(req,res)=>{
  
    let newQustions = new Exam(req.body.theQuotation);
     newQustions.save()
        
        .then((newExam)=>{      
            
            res.status(208).json({ Exam: newExam});
        
        })
        .catch((error)=>{       
        
            res.status(501).json({ error: error });
        
        
        } );
           
         
   



});


});

//update Quotions 
router.put('/api/Exams/Examsid/titleofExam/nameqoutions',(req,res)=>{

    res.send( {Type:'update'})

});

//deletquoitions
router.delete('/api/Exams/Examsid/titleofExam/nameqoutions',(req,res)=>{

    res.send( {Type:'update'})

});


module.exports = router 