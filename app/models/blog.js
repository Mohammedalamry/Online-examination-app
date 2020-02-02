const mongoose = require('mongoose')

const blogSchima = new mongoose.Schema({

    blogcontent:[ { 
        comment:{type : String , default:"non"} ,
         image:  {type : String ,default:"non"},
         vido:  {type : String , default:"non" },
         numberoflike:  {type :Number,default:0 },
     
     }]
 
   

});

const blog = mongoose.model('blog', blogSchima)
module.exports = blog 
