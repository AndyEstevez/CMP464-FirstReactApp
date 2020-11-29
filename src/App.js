import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectPage/ProjectsPage';
import SubPage from './components/ProjectPage/SubPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NavbarObject from './components/Navbar/NavbarObject';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <NavbarObject/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>
          <Route exact path="/projects/:id" component={SubPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
