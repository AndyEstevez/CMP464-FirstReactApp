import React from 'react';
import logo from './wallpaper.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand>Andy Estevez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/about"><AboutPage/></Route>
          <Route exact path="/projects"><ProjectsPage/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
