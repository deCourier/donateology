import React from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Blog from './Blog'
import Donator from './donator/Donator';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Nav from './Nav';

function App() {

  return (
    <div className = "App">



      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/donator" component = {Donator} />
            <Route path="/dashboard" component = {Dashboard} />
            <Route path="/blog" component = {Blog} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
