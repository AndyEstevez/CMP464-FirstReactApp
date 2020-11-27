import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
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
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/about"><AboutPage/></Route>
          <Route exact path="/contact"><ContactPage/></Route>
          <Route exact path="/projects"><ProjectsPage/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
