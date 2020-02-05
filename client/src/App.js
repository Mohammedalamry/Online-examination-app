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
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        {/* <h1> Test your Information </h1> */}

        {/* Exams */}
        <Route exact path="/Exams" render={props => <ShowAll {...props} />} />
        <Route exact path="/Exams/:id" render={props => <ShowOne {...props} />} />

        <Route path="/addQuestion" render={() => <AddQuetion />} />
        <Route path="/allUsers" component={AllUsers} />
        <Route path="/createUser" component={Usersing} />
        <Route path="/create" component={Creat} />
      </Router>
    </div>
  );
}

export default App;
