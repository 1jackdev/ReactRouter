import React from "react";
import { NavLink } from "react-router-dom";
import "./Cookies.css";
const Cookies = () => {
  return (
    <div className="cookie-container">
      <div className="gif"></div>
      <div className="card">
        <p>See? Its cookies!</p>
        <NavLink exact
              className="snack-link"
              activeClassName="active"
              to="/" >Go Back</NavLink>
      </div>
    </div>
  );
};

export default Cookies;
