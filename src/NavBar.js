import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink exact className="nav-link" activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact className="nav-link" activeClassName="active" to="/chips">
        Chips
      </NavLink>
      <NavLink exact className="nav-link" activeClassName="active" to="/soda">
        Soda
      </NavLink>
      <NavLink
        exact
        className="nav-link"
        activeClassName="active"
        to="/cookies"
      >
        Cookies
      </NavLink>
    </nav>
  );
};

export default NavBar;
