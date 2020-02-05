import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer";
import {Card, CardGroup,} from 'react-bootstrap'
import Creat from "./Components/Creat"
import AllUsers from './AllUsers'
import Usersing from "./usersing";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>

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

        <Route path="/createUser" component={Usersing} />
        <Route path="/create" component={Creat} />
      </div>
    </Router>
    </div>
  

  );

}

export default App;
