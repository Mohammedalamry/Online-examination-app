// Loading the express module on our server
const express = require('express');

// Creates a new instance of express on our server
const app = express();
//Manngoose database 
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project4', {useNewUrlParser : true , useUnifiedTopology: true } )

.then(()=> console.log('Mongodb is running'),(err)=> console.log(err) );

// Require DB Configuration File
const db = require('./config/db');

// // Require Seeds file
// const seed = require('./config/seed');

// // Establish Database Connection
// mongoose.connect(db, {useNewUrlParser: true});
// mongoose.connection.once('open', function() {
//   console.log('connected to mongo');
// });

//defined cors 

// const cors = require('cors');






//routerpath

app.get('/', function(req, res) { 

    res.send("Mohammed");
  // when a request comes in at localhost:3000, it will respond 
});

// app.get('/Exam', function(req, res) {
//     res.send('Hey, SEI Students!');
//   });
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
  app.use('/exam' , require('./app/routes/Exam'))
 
  app.use('/user', require('./app/routes/user'))
  app.use('/blog', require('./app/routes/blog'))
//   app.get('/Exam', function(req, res) {
//     res.send('Hey, SEI Students!');
//   });
// tells the server where to listen for requests
const port = process.env.PORT || 3001;
//  const reactPort =3000;
app.listen(port, function() {
  // tells the server where to listen for requests on port 3000
  // app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }));

  console.log(`hello-express is listening on port ${port}`);
}); // actualizing the line above

