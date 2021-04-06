import React from "react";
import { NavLink } from "react-router-dom";
import "./Chips.css";
const Chips = () => {
  return (
    <div className="chip-container">
      <div className="chips"></div>
      <div className="card">
        <p>Pretty tasty, right?!</p>
        <NavLink exact className="snack-link" activeClassName="active" to="/">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Chips;
