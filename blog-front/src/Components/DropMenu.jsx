import React from 'react';
import {NavLink} from 'react-router-dom';

const DropMenu = (props) => {
  console.log(props)
  return (
  <div className={`drop-menu-container ${props.menuStatus ? "is-active" : ""} ` }>
      <ul className="drop-list"> 
        <NavLink activeClassName="is-active" className="drop-item" to="/articles">
          <li className="drop-item">Profile</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Article Management</li>
        </NavLink>
        <NavLink activeClassName="is-active" className="drop-item" to="/articles" >
          <li className="drop-item">Logout</li>
        </NavLink>
      </ul>
    </div>
   );
}
 
export default DropMenu;