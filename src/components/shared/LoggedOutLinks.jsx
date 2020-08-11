import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Register!</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutLinks;
