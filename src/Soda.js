import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Soda.css";
const Soda = () => {
  const [pepsi, setPepsi] = useState(false);
  return (
    <div className="pepsi-container">
      <div className={pepsi ? "pepsi2" : "pepsi"}></div>
      <div className="card">
        <button onClick={()=> setPepsi(true)} >{pepsi ? "Here you go!": "Order a Pepsi"}</button>
        <NavLink exact className="snack-link" activeClassName="active" to="/">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Soda;
