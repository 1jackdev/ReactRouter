import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="container">
      <div id="left">
        <p className="msg">WHAT CAN I GET FOR YOU?</p>
      </div>
      <div id="right">
        <ul className="list">
          <li>
            <NavLink
              exact
              className="snack-link"
              activeClassName="active"
              to="/chips"
            >
              Chips
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="snack-link"
              activeClassName="active"
              to="/soda"
            >
              Soda
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="snack-link"
              activeClassName="active"
              to="/cookies"
            >
              Cookies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendingMachine;
