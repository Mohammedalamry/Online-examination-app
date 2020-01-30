const mongoose = require('mongoose')
  

const examSchima = new mongoose.Schema({
title: {type : String,required:true  } ,Exam: [{questions: {type : String,required:true  },

    Options:[{
     first_Option: {type : String,required:true  },
    sec_Option: {type : String ,required:true },
     thrid_Option: {type : String ,required:true },
     forth_Option: {type : String,required:true }
    }],
    Correct_Answer:{type : String,required:true  }
    
    }
    
    ]
  
  
});

const Exam = mongoose.model('exam' , examSchima)
module.exports = Exam