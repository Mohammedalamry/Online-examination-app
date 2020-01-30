const mongoose = require('mongoose')

const blogSchima = new mongoose.Schema({

    blogcontent:[ { 
       comment:{type : String } ,
        image:  {type : String },
        vido:  {type : String },
        numberoflike:  {type : Number},
    
    }]

})

const blog = mongoose.model('blog', blogSchima)
module.exports = blog 
