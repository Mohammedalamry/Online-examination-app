import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Card, CardGroup } from "react-bootstrap";
import Creat from "./Components/Creat";
import AllUsers from "./AllUsers";
import Usersing from "./usersing";

import AddQuetion from "./AddQusetion/AddQuestion";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ShowAll } from "./Questions/ShowAll";
import {ShowOne} from './Questions/ShowOne'
import Test from './Components/test'


function App() {
  return (
    <Router>

    <div>
    <div className="App">
 

       <NavBar />
       <h1> Test your Information </h1>
       <Footer/>
    </div>
    <CardGroup>
{/* usersing */}
     <Card>
     
      <Card.Body>

        <Card.Title>User</Card.Title>
        <Link to="/createUser">Create new User</Link>

        <Card.Text>
       
        </Card.Text>
      </Card.Body>
    
     </Card>
    <Card>
      <Card.Body>
        <Card.Title>Exam</Card.Title>
        <Link to="/create">Create new Exam</Link>
        <Card.Text>
 
        </Card.Text>
      </Card.Body>
     
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>Manage Users</Card.Title>
        <Link to="/allUsers">All users</Link>

        <Card.Text>
 
        </Card.Text>
      </Card.Body>
 
     </Card>
    </CardGroup>
      <div>
      <Route path="/allUsers" component={AllUsers} />

  <Route exact path="/Exams" render={props => <ShowAll {...props} />} />
        <Route exact path="/Exams/:id" render={props => <ShowOne {...props} />} />
        <Route path="/addQuestion" render={() => <AddQuetion />} />
        <Route path="/allUsers" component={AllUsers} />
        <Route path="/createUser" component={Usersing} />
        <Route path="/create" component={Creat} />

        <Route path="/update/:id" render={ (props)=> <Test {...props} /> } />

      </div>
    
    </div>
    </Router>



  );
}

export default App;
