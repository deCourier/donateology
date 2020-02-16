import React, {Component} from 'react';


class Nav extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-sm bg-dark fixed-top">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donator">Donator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard" >Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog" >Blog</a>
            </li>
          </ul>

        </nav>
      </div>
    );
  }
}

export default Nav;
