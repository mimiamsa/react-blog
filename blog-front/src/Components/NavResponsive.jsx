import React from 'react';
import { NavLink } from "react-router-dom";

const NavResponsive = () => {
  return (
    <div className="resp-nav-container">
      <NavLink activeClassName="is-active" className="nav-item resp-nav" to="/articles">Articles</NavLink>
      <NavLink activeClassName="is-active" className="nav-item resp-nav" to="/about">About</NavLink>
      <NavLink activeClassName="is-active" className="nav-item resp-nav" to="/videos">Videos</NavLink>
    </div>);
}

export default NavResponsive;