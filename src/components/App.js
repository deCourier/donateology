import React, { useContext } from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Web3 from 'web3';

/*
let {web3} = window;
const target_copy = Object.assign({}, web3);
web3 = new Web3(target_copy.currentProvider);
let url;
(async () => {
  let senders = await web3.eth.getAccounts();
let sender = senders[0];
let contract = new web3.eth.Contract(abi, address)
})()
*/

import Blog from './Blog'
import Donator from './donator/Donator';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Nav from './Nav';

function App() {
  return (
    <div className = "App">
<<<<<<< HEAD



      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/donator" component = {Donator} />
            <Route path="/dashboard" component = {Dashboard} />
            <Route path="/blog" component = {Blog} />
          </Switch>
      </Router>
=======
        <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/donator" component = {Donator} />
              <Route path="/dashboard" component = {Dashboard} />
            </Switch>
        </Router>
>>>>>>> 0d536131ab51e9361eaaa7e0a73d4201c09c1331
    </div>
  );
}

export default App;
