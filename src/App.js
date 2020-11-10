import React from 'react';
import logo from './wallpaper.jpg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My name is Andy and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/AndyEstevez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out
        </a>
      </header>

      <Switch>
        <Route path="/projects"><ProjectsPage/></Route>
        <Route path="/about"></Route>
        <Route path="/"></Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
