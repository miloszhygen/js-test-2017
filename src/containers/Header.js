import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component{
  render(){
    return(
      <nav>
        <ul className="menu">
          <li className="menu-text">Gifs For Life</li>
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/">Trending</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/favorites">My Favorites</Link>
          </li>
        </ul>
     </nav>
    )
  }
}
