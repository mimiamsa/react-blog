import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropMenu from "./DropMenu";

function NavMain() {
  // const [Loggedin, setLog] = useState(false);
  const [overed, setDropStatus] = useState(false)
  const handleMouseEnter = () => {
    setDropStatus(true)
  }
  const handleMouseLeave = () => {
    setDropStatus(false)
  }

  return (
    <div className="nav-bar">
      <nav className="nav">
        <div className="nav-side">
          <NavLink activeClassName="is-active" exact to="/home">
            <h1 className="nav-logo">There.</h1>
          </NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/articles">Articles</NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/about">About</NavLink>
          <NavLink activeClassName="is-active" className="nav-item" to="/videos">Videos</NavLink>
        </div>
        <div className="nav-side">
          {/* <NavLink activeClassName="is-active" className="nav-item-link" to="/signin">
            <button className="btn-nav">
              My Account
              <FontAwesomeIcon icon="angle-right" className="arrow-btn" />
            </button>
          </NavLink> */}
          <div className="profile-button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="profile-button">Pierre Dupont</p>
            <FontAwesomeIcon icon="user-circle" className="user-icon" />
          </div>

          <DropMenu menuStatus={overed} />
          {/* <NavLink activeClassName="is-active" to="/profile"></NavLink><FontAwesomeIcon icon="user-circle" className="faHeart" /> */}
        </div>

        {/* <NavLink activeClassName="is-active"  to="/profile">Favorites</NavLink> */}
        {/* <NavLink activeClassName="is-active"  to="/sign-in">Sign in</NavLink> */}
      </nav>
    </div>
  )
}

export default NavMain;