import React, { Component } from 'react';
import {Navbar ,Nav , Form  , Button} from 'react-bootstrap'
// import Creat from "./Components/Creat"
// import AllUsers from './Components/AllUsers'
// import Usersing from "./Components/usersing";
// import Test from './Components/test.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">About&nbsp;<i className="fas fa-graduation-cap"></i></Navbar.Brand>
            <Nav className="m-auto ml-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />    
              <Nav.Link href="#home" >Home&nbsp;<i className="fas fa-home"></i>
              </Nav.Link>
              <Nav.Link href="/update" >update&nbsp;<i className="fas fa-home"></i>
              </Nav.Link>
              <Nav className="nav-link text-white text uppercase  ml-5"></Nav>
              {/* addQuestion */}
              <Nav.Link href="/addQuestion">add Question&nbsp;<i className="fas fa-mosque"></i></Nav.Link>
              <Nav className="nav-link text-white text uppercase  ml-5"></Nav>
              <Nav.Link href="/Exams">All Exams&nbsp;<i className="fas fa-laptop-code"></i></Nav.Link>
              
              <Nav className="nav-link text-white text uppercase  ml-5"></Nav>
            </Nav>
            <Form inline>
              
              {/* <Navbar.Brand href="#admin">Admin&nbsp;<i className="fas fa-graduation-cap"></i></Navbar.Brand> */}
              <Button variant="outline-info">Admin</Button>
            </Form>
          </Navbar>
        );
    }
}

export default NavBar;