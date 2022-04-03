import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/rickandmorty">Rick and Morty</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/rickandmorty">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
