const mongoose = require('mongoose')
 
const userSchima = new mongoose.Schema({

  first_name : {type : String },
    last_name: {type : String },
    email: {type : String,required:true, unique:true   },
    password: {type : String , required:true}

    , Exams: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    }]
   , blogs: { type:mongoose.Schema.Types.ObjectId ,ref: 'blog'} 
    
});

const User = mongoose.model('user', userSchima)
module.exports =User
